def upper_case (words):

    for word in words:
        print(word.upper())

def upper_case2(words):

    for word in words:
        if word.startswith("e") or word.startswith("E"):
            print(word.upper())

def upper_case3(words,must_start_with):

    for word in words:
        for letter in must_start_with:
            if word.startswith(letter):
                print(word.upper())
                break