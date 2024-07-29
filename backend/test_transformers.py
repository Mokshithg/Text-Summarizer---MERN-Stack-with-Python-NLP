# backend/test_transformers.py
from transformers import pipeline

summarizer = pipeline("summarization")
summary = summarizer("This is a test text to verify the transformers installation.", max_length=50, min_length=10, do_sample=False)
print(summary)
