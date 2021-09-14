package com.danit.fs12.utils;

public class ForgotMailLetter {

  public String buildEmail(Integer code) {
    return "<table role=\"presentation\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\"> "
      +
      "<tbody> <tr> <td style=\"padding-bottom:20px\"> "
      +
      "<h2 style=\"margin:0;color:#262626;font-weight:700;font-size:20px;line-height:1.2\">Hello, Serhii,</h2>"
      +
      "</td> </tr> "
      +
      "<tr> <td style=\"padding-bottom:20px\"> "
      +
      "<p style=\"margin:0;color:#4c4c4c;font-weight:400;font-size:16px;line-height:1.25\">"
      +
      "We have received your request to change your LinkedIn profile password."
      +
      "</p>"
      +
      "</td> </tr> "
      +
      "<tr> <td style=\"padding-bottom:20px\"> "
      +
      "<h2 style=\"margin:0;color:#262626;font-weight:700;font-size:24px;line-height:1.167\">"
      + code
      + "</h2><"
      +
      "/td> </tr> "
      +
      "<tr> <td style=\"padding-bottom:20px\"> "
      +
      "<p style=\"margin:0;color:#4c4c4c;font-weight:400;font-size:16px;line-height:1.25\">"
      +
      "Please, enter this number to finish changes."
      +
      "</p>"
      +
      "</td> </tr> "
      +
      "<tr> <td style=\"padding-bottom:20px\"> "
      +
      "<p style=\"margin:0;color:#4c4c4c;font-weight:400;font-size:16px;line-height:1.25\">"
      +
      "Thank you for helping keep your account secure!</p> "
      +
      "<p style=\"margin:0;color:#4c4c4c;font-weight:400;font-size:16px;line-height:1.25\">"
      +
      "LinkedIn FS12 Team</p>"
      +
      "</td> </tr> "
      +
      "</tbody> "
      +
      "</table>";
  }
}
