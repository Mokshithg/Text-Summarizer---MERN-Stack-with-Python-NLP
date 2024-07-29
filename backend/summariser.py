import sys
from transformers import pipeline

# Specifying the model you want to use
model_name = "t5-small"  # we can change this model as per our requirement

# Creating a pipeline with the specified model
summarizer = pipeline("summarization", model=model_name)

if len(sys.argv) > 1:
    input_text = sys.argv[1]
    summary = summarizer(input_text, max_length=30, min_length=5, do_sample=False)
    print(summary[0]['summary_text'])
else:
    print("No text provided for summarization")
