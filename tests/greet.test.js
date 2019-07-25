describe('should return the language with the Name' , function(){
    it('should  return name in IsiXhosa ' , function(){
        var greetName =  greetFactory();
        //greetName.Language(Molo, Cairo);
        
        assert.equal( greetName.greet("Molo","Cairo"));
    });
    it('should  return name in Afrikaans' , function(){
        var greetName = greetFactory();
        //greetName.Language(Hallo, Inga Luu);
        
        assert.equal( greetName.greet("hallo","Bass John"));
    });
    it('should  return name in English' , function(){
        var greetName =  greetFactory();
        //greetName.Language(Hello,Bass John);
        
        assert.equal( greetName.greet("hello","Inga Luu"));
    });
    it('should  return the number of greeted Name' , function(){
        var greetName =  greetFactory();
        //greetName.Language(Hello,Bass John);
        
        assert.equal( greetName.getCounter(" "),0);
    });
    it('should be able to return five names greeted' , function(){
        var greetName =  greetFactory();
        //greetName.Language(Hello,Bass John);
        
         greetName.getCounter("Siya","IsiXhosa");
         greetName.getCounter("Sino","English");
         greetName.getCounter("Siwe","Afrikaans");
         greetName.getCounter("Odwa","IsiXhosa");
         greetName.getCounter("Cairo","English");
    });
    it('should  return empty string when there is no name/number' , function(){
        var greetName =  greetFactory();
        //greetName.Language(Hello,Bass John);
        
         greetName.getCounter(" ");
         greetName.getCounter("1");
         greetName.getCounter("&&");
    });

});