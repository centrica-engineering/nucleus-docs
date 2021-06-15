---
title: Telephone numbers
description: Formatting and best practice principles.
---

'Telephone numbers' in this context means all landline telephone, mobile or SMS numbers.

There are several formats that should be used along with accessibilty considerations.

## Formats 

### Freephone and special numbers 

To aid memorability, the patterns we use for freephone, non-geographical or emergency numbers are as follows:

| Format | Usage
| :--- | :--- 
| 0800&nbsp;XXX&nbsp;XXX / 0800&nbsp;XXX&nbsp;XXXX | Freephone |
| 0333&nbsp;XXX&nbsp;XXXX | Non-geographic |
| 105 | Electrical emergency |
| 0800&nbsp;111&nbsp;999 | Gas emergency |





### UK area codes and local numbers 

The length of area codes and local numbers varies across the UK, which means there are several valid formats (X = any digit 0-9):

| Format | Usage
| :--- | :--- 
| 02X&nbsp;XXXX&nbsp;XXXX | Cardiff, Coventry, London, Portsmouth, Southampton and all of Northern Ireland |
| 01X1&nbsp;XXX&nbsp;XXXX / 011X&nbsp;XXX&nbsp;XXXX | Most other major cities |
| 01XXX&nbsp;XXXXXX / 01XXX&nbsp;XXXXX | Smaller cities, provincial towns and rural areas |


Separate the area code from the local number with a space.

Split longer local numbers with a space for readability.


## From overseas

If a UK number is to be dialled from overseas, we should format it using the +44 prefix and remove the leading 0 from the rest of the number:

>01234 567890 becomes +44 123 4567890

### Mobile phone numbers

There is no set pattern for mobile phone numbers, although it is helpful to break up the number with at least one space for readability.

>07XXX&nbsp;XXXXXX


### SMS numbers

SMS (Short Message System) numbers are typically 5 digits long with no spaces.

>54321






[Source: UK telephone formatting](http://www.area-codes.org.uk/formatting.php)



## Accessibility

TBC here with aria-label info... 


```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    ...
  </head>
  <body class="ndsn">
    ...
  </body>
</html>
```