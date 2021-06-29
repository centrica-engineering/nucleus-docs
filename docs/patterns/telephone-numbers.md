---
title: Telephone numbers
description: Formatting and best practice principles.
---

'Telephone numbers' in this context means all landline telephone, mobile or SMS numbers.

There are several display formats that describe how numbers should be shown and these should be used along with accessibility considerations. 


## Visual format guidelines

### Freephone and special numbers 

To aid memorability, the patterns we use for freephone, non-geographical or emergency numbers are as follows:

| Format | Usage
| :--- | :--- 
| 0800&nbsp;XXX&nbsp;XXX / 0800&nbsp;XXX&nbsp;XXXX | Freephone |
| 0333&nbsp;XXX&nbsp;XXX / 0333&nbsp;XXX&nbsp;XXXX | Non-geographic |
| 105 | Electrical emergency |
| 0800&nbsp;111&nbsp;999 | Gas emergency |


### UK area codes and local numbers 

The length of area codes and local numbers varies across the UK, which means there are several valid formats (X = any digit 0-9):

| Format | Usage
| :--- | :--- 
| 02X&nbsp;XXXX&nbsp;XXXX | Cardiff, Coventry, London, Portsmouth, Southampton and all of Northern Ireland |
| 01X1&nbsp;XXX&nbsp;XXXX / 011X&nbsp;XXX&nbsp;XXXX | Most other major cities |
| 01XXX&nbsp;XXXXXX / 01XXX&nbsp;XXXXX | Smaller cities, provincial towns and rural areas |


### From overseas

If a UK number is to be dialled from overseas, we should format it using the +44 prefix and remove the leading 0 from the rest of the number:

>01234 567890 becomes +44 123 4567890

### Mobile phone numbers

There is no set pattern for mobile phone numbers, although it is helpful to break up the number with at least one space for readability.

>07XXX&nbsp;XXXXXX


### SMS numbers

SMS (Short Message System) numbers are typically 5 digits long with no spaces.

>54321


Ref: [area-codes.org.uk](http://www.area-codes.org.uk/formatting.php)


### Displaying numbers as links 

Don't display phone numbers as links on devices that cannot make calls. Don't use links like this...

```html
<a href="tel:+442079476330">020 7947 6330</a>
```

This can confuse users viewing on a device that doesn't support telephone calls. It is unnecessary - most modern mobile browsers automatically detect telephone numbers and display them as links anyway.

Ref: [gov.uk](https://design-system.service.gov.uk/patterns/telephone-numbers/)


### Supportive text

Using precursory text with the number can help the user identify what it is and what to do with it. For example: 

>"Call us on 0800..." etc.

Using a time frame is also a good idea to help set expectations: 

>"Call us on 0330... 9.00am – 5.00pm, Monday to Friday."

In the context of requesting a number from a customer (such as in a form), it can be helpful to explain to them why you might contact them and when. 

### Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Separate the area code from the local number with a space | Push the area code and digits together |
| Split longer local numbers with a space for readability | Format major city numbers like smaller town formats and vice versa |
| Loose the preceding 0 when applying the calling from overseas format (+44 etc) | Show (0) in the calling from overseas format |
| Use a space after 5th digit on a mobile number for readability | Display phone numbers as links on devices that cannot make calls |
| Use supportive text and perhaps time frames around the number | Collect numbers without explaining why they are needed |
