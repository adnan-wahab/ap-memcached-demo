

# frontend caching
simple key value store that tracks age of edit and deletes values that havent been used/changed in 5 minutes


for the table layout i used my own design and blueprint.js just to compare. I think mine looks better but 
it comes with less out-of-the-box functionality.. 



# validation
when the address is submitted, i check if it exists with etherscan
if it doesnt, an alert pops up
in a real production app I'd use an alert collapsible and highlight the form 


# security
move api-key to process.env