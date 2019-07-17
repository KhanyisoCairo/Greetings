describe('should return the language with the Name' , function(){
    it('should  return greet with Molo and Cairo ' , function(){
        var greetName =  Language();
        //greetName.Language(Molo, Cairo);
        
        assert.equal( greetName.greet("Molo","Cairo"));
    });
    it('should  return greet with Hallo and the Name Bass John' , function(){
        var greetName =  Language();
        //greetName.Language(Hallo, Inga Luu);
        
        assert.equal( greetName.greet("hallo","Bass John"));
    });
    it('should  return greet with Hello and the Name  Inga Luu' , function(){
        var greetName =  Language();
        //greetName.Language(Hello,Bass John);
        
        assert.equal( greetName.greet("hello","Inga Luu"));
    });

});