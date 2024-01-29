---
title: Telephone numbers
description: Formatting and best practice principles.
---

import { PageFooter } from '../../includes/page-footer.js'

'Telephone numbers' in this context means all landline telephone, mobile or SMS numbers.

There are several display formats that describe how numbers should be shown and these should be used along with accessibility considerations. 


## Visual format guidelines (UK)

### Freephone and special numbers 

To aid memorability, the patterns we use for freephone, non-geographical or emergency numbers are as follows:

| Format | Usage
| :--- | :--- 
| 0800&nbsp;XXX&nbsp;XXX / 0800&nbsp;XXX&nbsp;XXXX | Freephone |
| 0333&nbsp;XXX&nbsp;XXX / 0333&nbsp;XXX&nbsp;XXXX | Non-geographic |
| 105 | Electrical emergency |
| 0800&nbsp;111&nbsp;999 | Gas emergency |

In some cases, if you have a number such as 0800 112 233, it could be more memorable to display it as 0800 11 22 33.


### Area codes and local numbers 

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

There is no set pattern for mobile phone numbers, although it is helpful to break up the number with at least one space for readability. Typically after the 5th digit.

>07XXX&nbsp;XXXXXX


### SMS numbers

SMS (Short Message System) numbers are typically 5 digits long with no spaces.

>54321


Ref: [area-codes.org.uk](http://www.area-codes.org.uk/formatting.php)


### Displaying numbers as links 

If you intend for a telephone number to be a link, put "tel:..." in the href without any spacing. 


```html
<a href="tel:0800111999">0800 111 999</a>
```

Or similarly to create an SMS, put "sms:..."

```html
<a href="sms:01234567890">01234 567890</a>
```

With SMS links you can also pre-populate the message body text by adding information to the href. The text used should be kept concise and clear.

```html
<a href="sms:01234567890;?&body=/* body text here */">01234 567890</a>
```

Even though many modern mobile browsers can automatically detect telephone numbers without this and display them as links, they should not be relied on because they can also misinterpret other numbers (such as meter reading numbers) and display them incorrectly as links. Also, the setting may have even been disabled by the user. 

Using intentional links, especially when used with supportive text, help define and distinguish them from incorrectly interpreted other types of number.

It cannot always be determined if the user's device supports calls or not, as this depends on the software (eg. Skype) they may have installed on mobile or desktop devices.

If you don't want to display a number as a link do not use the ```<a>``` tag. For example, when displaying a customer's phone number they have provided, they don't need to be able to call themselves. 



### Supportive text

Using precursory text with the number can help the user understand the intention. For example: 

>"Call us on 0800..." etc.

With the addition of a time frame can also a good idea to help set expectations: 

>"Call us on 0330... 9.00am – 5.00pm, Monday to Friday."

In the context of requesting a number from a customer (such as in a form), it can be helpful to explain to them why you might contact them and when. 


### Icon usage

There is currently no phone icon available within Nucleus. It is recommended not to use one for this reason at this time.

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Separate the area code from the local number with a space | Push the area code and digits together |
| Split longer local numbers with a space for readability | Format major city numbers like smaller town formats and vice versa |
| Loose the preceding 0 when applying the calling from overseas format (+44 etc) | Show (0) in the calling from overseas format |
| Use a space after 5th digit on a mobile number for readability | Display phone numbers as links on devices that cannot make calls |
| Use supportive text and perhaps time frames around the number | Collect numbers without explaining why they are needed |
| Try to keep a number on one line where possible, without wrapping | Use a phone icon with the number - there is currently no phone icon within Nucleus |
| Show numbers for customers to call in a different style to those they have provided | Disclose customer phone numbers to the public |

## Aria-label accessibility

>"The aria-label attribute provides the text label for an object...
When a screen reader encounters the object, the aria-label text is read so that the user will know what it is."
[W3.org](https://www.w3.org/TR/WCAG20-TECHS/ARIA6.html) 

Some screen-readers may read a phone number as a larger number for example the last part of 01234 567890 may be read as 'five-hundred and sixty-seven thousand eight-hundred and ninety'. This could be overridden by using the aria-label with separated digits using spaces and commas:

```html
<a href="tel:08001234567" aria-label="0800, 1 2 3, 4 5 6 7">0800 123 4567</a>
```

Then the above would be read as 'O-eight-hundred, one two three, four five six seven' - how the number typically sounds.

### However

This could be overriding the screen-reader user's preference, so should only be used in the event of an issue being raised. (Further testing of this with regular screen-reader users is recommended).

## Flexible structure

If the system is consumed by a non-UK-based team, they might need to use a different set of rules. The above can be modified to work with the formatting used in other countries. 

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[patterns-messaging]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[patterns-messaging]).

<PageFooter></PageFooter>
