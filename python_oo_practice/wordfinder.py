"""Word Finder: finds random words from a dictionary."""
import random

class WordFinder:

    def __init__(self,path):

        words_path = open(path)
        
        path

        self.words = self.convert(words_path)

        print(f"{len(self.words)} words read")

    def __repr__(self):
        return f"WordFinder words found from file."
    
    def convert(self, words_path):
        return [words.strip() for words in words_path]
    
    def random(self):
        return random.choice(self.words)
    



class SpecialWordFinder(WordFinder):

    def convert(self, words_path):
        return [words.strip() for words in words_path
                if words.strip() and not words.startswith("#")]
    
