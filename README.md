# Songnotes

a Full Stack React song forum app that scrapes data from this week's most popular charts  [Website](https://song-notes.herokuapp.com/)

---

NOTE: The data for this app was scraped from [The Rolling Stones Top 100 Songs](https://www.rollingstone.com/charts/songs/)

Welcome to Songnotes! The `Home` Page consists of 15 rendered cards, each containing the song,
artist, and album art of a hot song of this week. Press `Scrape` at any time to refresh the list of top 15 songs (the charts are updated frequently). 

Press the `Notes` button on any card to view that song's page. The page contains all discussion of that particular song. Leave a comment and the world know your thoughts on the song!

### Download and Run

Once you have cloned the repository, make sure that you are in the correct directory and run the command 

```
npm  i
```
to install all node package dependencies. Once the installation is finished, run the command

```
npm  start
```
This will create two server instances- the client server will be hosted on Port 3000, 
and the express server will be hosted on Port 3001.

### **Technologies**

   * `cheerio`

   * `mongoose`

   * `axios`

   * `express`
   
   * `react-bootstrap`
    

