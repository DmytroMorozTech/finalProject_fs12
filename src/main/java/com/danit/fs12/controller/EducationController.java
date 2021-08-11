package com.danit.fs12.controller;

import com.danit.fs12.facade.EducationFacade;
import com.danit.fs12.entity.education.EducationRq;
import com.danit.fs12.entity.education.EducationRs;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/education")
public class EducationController {
    private final EducationFacade educationFacade

    @GetMapping
    List<EducationRs> findAll(){
        return educationFacade.findAll();
    }

    @GetMapping(path = "{id}")
    public ResponseEntity<EducationRs> findById(@PathVariable Long id) {
        EducationRs education = educationFacade.findById(id);
        return ResponseEntity.ok(education);
    }

    @PostMapping
    public ResponseEntity<EducationRs> fillInfo(@Valid @RequestBody EducationRq rq) {
        EducationRs education = educationFacade.fillInfo(rq);
        return ResponseEntity.ok(education);
    }
}
