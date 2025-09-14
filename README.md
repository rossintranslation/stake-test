## 📝 Notes  
# most shared components were placed in the shared components module, which you can then import into the tabs modules, will allow for new components to shared in future

# the intial list fetch uses an observable called holdingsList$ that calls getStocks(). in the component the observanable is subscribed to on initialisation and then also triggered using fetchHoldings() which triggers initial data fetch

# fetchHoldigs() can be reusesd to fetch data again, if a user buys a new holding.

# In terms of ui i didnt have enough time to style each component so i tried to levereage as many ionic components as a could.

# no time time to update the holdings when buying, but the animation is there

# the update would work using a POST that would pass the purchased holding through an endpoint, on success it would then recall fetchHoldings() to refresh the list and the equity value.

# total equity was calculated calculated based on price multiplied by the number of shares then combined

# Tried to use as many ionic components as a could as it was quite a lot to do from scratch, however it was my first time using ionic. Had no time to implement the sliding button

# Tried to add global styles in the variables .scss but was rushed for time

# ive run out of time, and could not implmenet the discover page, but the idea would be to create a service that would consume an api for all the stocks. and then in the search bar implement a input that filter the results of the stocks based on the search entered

