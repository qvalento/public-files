
# Regular Expressions (RegEx) Cheat Sheet

## Basic Syntax

| Syntax | Description | Example | Matches | Does Not Match |
| ------ | ----------- | ------- | ------- | -------------- |
| `.`    | Matches any single character except newline | `a.c` | "abc", "adc", "a_c" | "ac" |
| `*`    | Matches zero or more of the preceding character | `a*b` | "b", "ab", "aab" | "ac" |
| `+`    | Matches one or more of the preceding character | `a+b` | "ab", "aab", "aaab" | "b" |
| `?`    | Makes the preceding character optional | `colou?r` | "color", "colour" | "colouur" |
| `^`    | Matches the start of a string | `^a` | "a" in "apple" | "a" in "banana" |
| `$`    | Matches the end of a string | `a$` | "a" in "tuna" | "a" in "apple" |

## Character Sets

| Syntax | Description | Example | Matches | Does Not Match |
| ------ | ----------- | ------- | ------- | -------------- |
| `[abc]` | Matches any one of the characters a, b, or c | `b[aiu]t` | "bat", "bit", "but" | "bxt" |
| `[^abc]` | Matches any character except a, b, or c | `[^a-c]` | any character except "a", "b", "c" | "a", "b", "c" |

## Special Sequences

| Syntax | Description | Example | Matches | Does Not Match |
| ------ | ----------- | ------- | ------- | -------------- |
| `\d`   | Matches any decimal digit; equivalent to `[0-9]` | `\d` | "2" in "B2" | "B" in "B2" |
| `\D`   | Matches any non-digit character; equivalent to `[^0-9]` | `\D` | "B" in "B2" | "2" in "B2" |
| `\w`   | Matches any alphanumeric character (including underscore); equivalent to `[a-zA-Z0-9_]` | `\w` | "A" in "A1" | "!" in "A!1" |
| `\W`   | Matches any non-alphanumeric character; equivalent to `[^a-zA-Z0-9_]` | `\W` | "@" in "user@email.com" | "A" in "userAemail.com" |
| `\s`   | Matches any whitespace character (space, tab, newline) | `a\sb` | "a b" | "ab" |
| `\S`   | Matches any non-whitespace character | `a\Sb` | "a-b" | "a b" |

## Quantifiers

| Syntax | Description | Example | Matches | Does Not Match |
| ------ | ----------- | ------- | ------- | -------------- |
| `{n}`  | Matches exactly n copies of the previous character | `a{3}` | "aaa" | "aa", "aaaa" |
| `{n,}` | Matches n or more copies of the previous character | `a{2,}` | "aa", "aaa", "aaaa" | "a" |
| `{n,m}`| Matches between n and m copies of the previous character | `a{2,4}` | "aa", "aaa", "aaaa" | "a", "aaaaa" |

## Grouping and Alternation

| Syntax | Description | Example | Matches | Does Not Match |
| ------ | ----------- | ------- | ------- | -------------- |
| `(abc)` | Matches the exact sequence "abc" | `(abc)` | "abc" | "ab", "bc" |
| `\|`    | Acts as an OR operator | `a\|b` | "a", "b" | "c" |
| `(a\|b)c` | Matches "ac" or "bc" | `(a\|b)c` | "ac", "bc" | "abc" |

## Escape Character

| Syntax | Description | Example | Matches | Does Not Match |
| ------ | ----------- | ------- | ------- | -------------- |
| `\`   | Used to escape special characters | `\.` | "." | "a", " " |

_This cheat sheet is designed to help with basic RegEx patterns and may not cover all advanced use cases._
