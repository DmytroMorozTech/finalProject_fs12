package com.danit.fs12.controller;

import com.cloudinary.Cloudinary;
import com.cloudinary.Transformation;
import com.cloudinary.utils.ObjectUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping(path = "/api/media")
@RequiredArgsConstructor
public class MediaController {
  private final Cloudinary cloudinary;

  @GetMapping
  ResponseEntity<?> uploadPicture() throws IOException {
    File file = new File("cat.jpg");
    Map uploadResult = cloudinary.uploader().upload(
      file,
      ObjectUtils.asMap(
        "folder", "myfolder/mysubfolder/",
        "public_id", "my_name",
        "use_filename", "true",
        "unique_filename", "true",
        "resource_type", "auto"
      )
      // if we want to assign public id by ourselves
      // this more detailed and well-thought-out configuration worked quite well indeed
      // new folder was created and file was taken from HDD (in this case) and send to Cloudinary

    );
    System.out.println(uploadResult.get("url"));

    return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
  }

  @PostMapping("/upload")
  public String handleFileUpload(@RequestParam("file") MultipartFile file) throws IOException {

//    File file1 = new File(String.valueOf(file));
    String contents = new String(file.getBytes());
    System.out.println("POST -> /file contents=%s");
    System.out.println(contents);
//    Map uploadResult = cloudinary.uploader().upload(file.getBytes(), ObjectUtils.emptyMap());
//    System.out.println(uploadResult.get("url"));
    return "DONE WELL";
  }

  @GetMapping("/test-url")
  public String testUrlMethod() throws IOException {
//    HashMap<String, String> options = new HashMap<>() {{
//      put("resource_type", "video");
//      put("format", "mov");
//      put("width", "600");
//    }};
//
//    System.out.println(options);
    String generatedUrl = cloudinary.url().transformation(
        new Transformation().width(100).height(80).crop("fill"))
      .generate("v1628418313/linkedin/avatars/okktjt3pedvcz3zemwor.jpg");
    // так работает! То есть я должен передать ему адрес моего файла вот в таком виде
    // чтобы клаудинари мог мог создать бы мне корректный generatedUrl
    // то есть УРЛ для данного конкретного изображения с учетом всех требуемых мне трансформаций
    // а после этого я могу, получив данный УРЛ, сохранять его в БД для определенной сущности
    // например, как аватар пользователя
    System.out.println(generatedUrl);

    // Задача номер 1 - сохранить определенный ресурс на клаудинари.
    // Задача номер 2 - как єто сделано сверху, создать УРЛ с трансформациями данного ресурса
    // но поскольку у нас аватар будет на главной странице все равно загружаться в большом виде
    // то нет смысла еще какой-то вариант аватара еще подгружать. Браузер его сожмет там, где надо
    // но у каждого пользователя может быть поле в БД, где будет храниться оптимизированное фото с очень
    // маленьким аватаром

    return "DONE";
  }
}
