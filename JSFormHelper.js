function addScript(script) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = script;
    head.appendChild(script);
}

function isNumeric(sText)
{
   var ValidChars = "0123456789.";
   var IsNumber=true;
   var Char;

   for (i = 0; i < sText.length && IsNumber == true; i++)
      {
      Char = sText.charAt(i);
      if (ValidChars.indexOf(Char) == -1)
         {
         IsNumber = false;
         }
      }
   return IsNumber;

}

function isInteger(sText)
{
   var ValidChars = "0123456789";
   var IsNumber=true;
   var Char;

   for (i = 0; i < sText.length && IsNumber == true; i++)
      {
      Char = sText.charAt(i);
      if (ValidChars.indexOf(Char) == -1)
         {
         IsNumber = false;
         }
      }
   return IsNumber;

}

function isAlpha(sText)
{
   var ValidChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
   var IsAlpha=true;
   var Char;

   for (i = 0; i < sText.length && IsAlpha == true; i++)
      {
      Char = sText.charAt(i);
      if (ValidChars.indexOf(Char) == -1)
         {
         IsAlpha = false;
         }
      }
   return IsAlpha;

}

function isAlphanumeric(sText)
{
   var ValidChars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
   var IsAlpha=true;
   var Char;

   for (i = 0; i < sText.length && IsAlpha == true; i++)
      {
      Char = sText.charAt(i);
      if (ValidChars.indexOf(Char) == -1)
         {
         IsAlpha = false;
         }
      }
   return IsAlpha;

}

function isSSN(sText)
{
   var ValidChars = "0123456789-";
   var IsSSN=true;
   var Char;

   for (i = 0; i < sText.length && IsSSN == true; i++)
      {
      Char = sText.charAt(i);
      if (ValidChars.indexOf(Char) == -1)
         {
         IsSSN = false;
         }
      }
   return IsSSN;

}

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    return pattern.test(emailAddress);
};

function isValidPassword(password) {
    var pattern = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
    return pattern.test(password);
};

function isValidName(name) {
    var pattern = new RegExp(/^[a-zA-Z]+$/);
    return pattern.test(name);
};

function isValidPhone(phone) {
    var pattern = new RegExp(/^[0-9]{10}$/);
    return pattern.test(phone);
};

function isValidDate(date) {
    var pattern = new RegExp(/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/);
    return pattern.test(date);
};

function isValidZip(zip) {
    var pattern = new RegExp(/^[0-9]{5}$/);
    return pattern.test(zip);
};

function isValidState(state) {
    var pattern = new RegExp(/^[A-Z]{2}$/);
    return pattern.test(state);
};

function isValidCreditCard(creditCard) {
    var pattern = new RegExp(/^[0-9]{16}$/);
    return pattern.test(creditCard);
};

function isValidCVV(cvv) {
    var pattern = new RegExp(/^[0-9]{3}$/);
    return pattern.test(cvv);
};