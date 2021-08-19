package com.danit.fs12.utils;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;

public final class HeadersUtils {
  private HeadersUtils() {
  }

  /**
   * This is a helper method that takes in a Page of some entities as a parameter
   * and creates corresponding headers for the Response object that will be sent to frontend
   */
  public static HttpHeaders createPaginationHeaders(Page page) {
    HttpHeaders responseHeaders = new HttpHeaders();
    responseHeaders.set("pageSize", Integer.toString(page.getSize()));
    responseHeaders.set("totalPages", Integer.toString(page.getTotalPages()));
    responseHeaders.set("hasMore", Boolean.toString(page.hasNext()));
    responseHeaders.set("pageNumber", Integer.toString(page.getNumber()));
    return responseHeaders;
  }


}
