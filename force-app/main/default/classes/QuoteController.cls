public with sharing class QuoteController extends QuoteDto {
   
    @AuraEnabled(cacheable=true)
    public static QuoteDto getQuoteRecord(){
        Quote__c quote= [SELECT Name, Start_Date__c, EndDate__c FROM Quote__c LIMIT 1];

        QuoteDto obj = new QuoteDto(quote);
        system.debug(obj);
      
        return obj;
    }
}