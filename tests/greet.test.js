describe('Greet Function', function () {
    it('should  return Molo Cairo if you have selected language as IsiXhosa and your name is Cairo ', function () {
        var greetName = greetFactory();
        //greetName.Language(Molo, Cairo);

        assert.equal(greetName.greet("Molo", "Cairo"));
    });
    it('should  return Hallo Bass John if you have selected language as Afrikaans and your name is Bass John', function () {
        var greetName = greetFactory();
        //greetName.Language(Hallo, Inga Luu);

        assert.equal(greetName.greet("hallo", "Bass John"));
    });
    it('should  return Hello Siya if you have selected language as English and your name is Siya', function () {
        var greetName = greetFactory();
        //greetName.Language(Hello,Bass John);

        assert.equal(greetName.greet("Hello, Siya"));
    });
    it('The counter should return zero if you dont select name and language', function () {
        var greetName = greetFactory();
        //greetName.Language(Hello,Bass John);

        assert.equal(greetName.getCounter(" "), 0);
    });
    it('should return 5 as the number of counter if you greeted 5 diffirent users', function () {
        var greetName = greetFactory();
        //greetName.Language(Hello,Bass John);

        greetName.getCounter("Siya", "IsiXhosa");
        greetName.getCounter("Sino", "English");
        greetName.getCounter("Siwe", "Afrikaans");
        greetName.getCounter("Odwa", "IsiXhosa");
        greetName.getCounter("Cairo", "English");
    });
    it('should  return empty string when there is no name or number', function () {
        var greetName = greetFactory();
        //greetName.Language(Hello,Bass John);

        greetName.getCounter(" ");
        greetName.getCounter("1");
        greetName.getCounter("&&");
    });
    it('the counter should return 1 if u greeted Siya two times ', function () {
        var greetName = greetFactory();
        //greetName.Language(Hello,Bass John);

        greetName.getCounter("Siya", "Siya");
       
    });
    it('the counter should return 1 if you write makho with upperCase or LowerCase ', function () {
        var greetName = greetFactory();
        //greetName.Language(Hello,Bass John);

        greetName.getCounter("Makho", "maKho");
       
    });

});