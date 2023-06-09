package com.grupo9.digitalBooking.music.model.service;

import sendinblue.*;
import sendinblue.auth.ApiKeyAuth;
import sibApi.AccountApi;
import sibApi.TransactionalEmailsApi;
import sibModel.*;


public class MailService {

    public void sendEmail() {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        ApiKeyAuth apiKey = (ApiKeyAuth) defaultClient.getAuthentication("api-key");
        apiKey.setApiKey("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");

        TransactionalEmailsApi apiInstance = new TransactionalEmailsApi();
        SendSmtpEmailSender sender = new SendSmtpEmailSender();
        sender.setEmail("cristianvargas385@gmail.com");
        sender.setName("Christian Vargas");

        SendSmtpEmailTo to = new SendSmtpEmailTo();
        to.setEmail("Laura.salazar.cien@gmail.con");
        to.setName("Laura");

        SendSmtpEmail sendSmtpEmail = new SendSmtpEmail();
        sendSmtpEmail.setHtmlContent("<html>" +
                "<body>" +
                    "<h2>Pruebas de email christian</h2>" +
                    "<p>Hola " + to.getName() +"</p>" +
                "</body>" +
                "</html>");
        sendSmtpEmail.setSubject("Pruebas Christian api email");
        System.out.println(sendSmtpEmail);
        try {
            CreateSmtpEmail result = apiInstance.sendTransacEmail(sendSmtpEmail);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TransactionalEmailsApi#sendTransacEmail");
            e.printStackTrace();
        }
    }

}
