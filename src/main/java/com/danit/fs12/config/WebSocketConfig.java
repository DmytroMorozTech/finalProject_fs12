package com.danit.fs12.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

  @Override
  public void configureMessageBroker(MessageBrokerRegistry config) {
    // front broker registration to send messages to front
    config.enableSimpleBroker("/front");
    // back endpoint prefix to obtain messages from front
    config.setApplicationDestinationPrefixes("/back");

    //sample:
    //Route messages whose destination header begins with "/topic" or "/queue" to the broker.
//    config.enableSimpleBroker("/topic", "/queue");
    //
  }

  @Override
  public void registerStompEndpoints(StompEndpointRegistry registry) {
    registry
      .addEndpoint("/ws_0001")
      .withSockJS()
      .setHeartbeatTime(20_000);
  }


  // this was added by V
//  @Override
//  public boolean configureMessageConverters(List<MessageConverter> messageConverters) {
//    DefaultContentTypeResolver resolver = new DefaultContentTypeResolver();
//    resolver.setDefaultMimeType(MimeTypeUtils.APPLICATION_JSON);
//    MappingJackson2MessageConverter converter = new MappingJackson2MessageConverter();
//    converter.setObjectMapper(new ObjectMapper());
//    converter.setContentTypeResolver(resolver);
//    messageConverters.add(converter);
//    return false;
//  }

}