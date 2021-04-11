// const pup = require("puppeteer");
// const fs = require("fs");
// // let data = require("/Users/kartikey/Desktop/MMUB/playlistSwitching/songNames.js");

// async function copyYTMdata()
// {
//     let browser = await pup.launch({
//         defaultViewport : false,
//         headless : false,
//         setViewport : {
//             height: 800,
//              width: 1200,
//         }
//     });

//     const page = await browser.newPage();
//     await page.goto("https://music.youtube.com/playlist?list=PLAvBMoR19uYEcVCHSihPI-_F8B_iT-BNX");
//     await autoScroll(page);
//     await page.waitForSelector(".title.style-scope.ytmusic-responsive-list-item-renderer.complex-string a");
//     let allMusic = await page.$$(".title.style-scope.ytmusic-responsive-list-item-renderer.complex-string a");
//     let ytPlaylist = [];
//     for(i = 0; i< allMusic.length; i++)
//     {  
//           ytPlaylist.push({ "song" : await page.evaluate(function(ele){
//             return ele.textContent;
//         }, allMusic[i])});
//     }

//     console.log(ytPlaylist);
//     fs.writeFileSync("songNames.js", JSON.stringify(ytPlaylist));
//     browser.close();
//     // await pasteOnSpotify();
// }

// async function autoScroll(page){


//     await page.evaluate(async () => {
//         await new Promise((resolve, reject) => {
//             var totalHeight = 0;
//             var distance = 100;
//             var timer = setInterval(() => {
//                 var scrollHeight = document.body.scrollHeight;
//                 window.scrollBy(0, distance);
//                 totalHeight += distance;

//                 if(totalHeight >= scrollHeight){
//                     clearInterval(timer);
//                     resolve();
//                 }
//             }, 100);
//         });
//     });
// }


// async function pasteOnSpotify(){

//     let id ="mikex88617@684hh.com";
//     let pass = "temp123*";
//     let browser = await pup.launch({
//         defaultViewport : false,
//         headless : false,
//         args: ["--start-fullscreen"]
        
//     });

//     const page = await browser.newPage();
//     await page.goto("https://open.spotify.com/");
//     await page.waitForSelector("button[data-testid='login-button']");
//     await page.click("button[data-testid='login-button']")
//     await page.waitForSelector("#login-username");
//     await page.type("#login-username", id);
//     await page.type("#login-password", pass);
//     await page.click("#login-button");
//     await page.waitForSelector("button[data-testid='create-playlist-button']");
//     await new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve();
//         }, 1000);
//     })
//     await page.click("button[data-testid='create-playlist-button']");
//     await page.waitForSelector("._655bc45ccbf3d91c685865ff470892eb-scss.f3fc214b257ae2f1d43d4c594a94497f-scss");


//     //SEARCHING THE SCRAPPED DATA
//     let data = fs.readFileSync("./songNames.js", "utf-8");
//     data = JSON.parse(data);
//     for(let i = 0; i< data.length; i++)
//         data[i].song = data[i].song.replace("feat.", "");

    
//     for(let i= 0; i< data.length; i++)
    // {
    //     await page.type("._655bc45ccbf3d91c685865ff470892eb-scss.f3fc214b257ae2f1d43d4c594a94497f-scss", data[i].song);
    //     await new Promise((resolve)=>{
    //         setTimeout(()=>{resolve();}, 1000);
    //     })
    //     await page.waitForSelector(".b490086127ec0ecdc7b170c03de9c5b1-scss");
    //     let addButton = await page.$$(".b490086127ec0ecdc7b170c03de9c5b1-scss");
    //     await page.click("span[aria-label='Add to Playlist']");
    //     await page.click(".e2743454bbd40e4ecd04d30f09d53798-scss");
    //     await page.click("._655bc45ccbf3d91c685865ff470892eb-scss.f3fc214b257ae2f1d43d4c594a94497f-scss");
    //     // if(i == 3)
    //     //     break;
    // }

//     browser.close();
// }


// async function addToPlaylist(page, song)
// {
//     await page.type("._655bc45ccbf3d91c685865ff470892eb-scss.f3fc214b257ae2f1d43d4c594a94497f-scss", song);
    

//     await page.waitForSelector(".b490086127ec0ecdc7b170c03de9c5b1-scss");
//     let addButton = await page.$$(".b490086127ec0ecdc7b170c03de9c5b1-scss");
//     await page.click(addButton[0])
// }


// let data = fs.readFileSync("./songNamescopy.js", "utf-8");
// data = JSON.parse(data);
// for(let i = 0; i< data.length; i++)
//     data[i].song = data[i].song.replace(/\([^()]*\)/g, '')

// console.log(data);



// // pasteOnSpotify();
// // copyYTMdata();

   



















const pup = require("puppeteer");
const fs = require("fs");

async function copyYTMdata()
{
    let browser = await pup.launch({
        defaultViewport : false,
        headless : false,
        setViewport : {
            height: 800,
             width: 1200,
        }
    });

    const page = await browser.newPage();
    await page.goto("https://music.youtube.com/playlist?list=RDCLAK5uy_mjFIQx6np0uEk0EFQnkGFxqR3OMxReYv0&feature=share");
    await autoScroll(page);
    await page.waitForSelector(".title.style-scope.ytmusic-responsive-list-item-renderer.complex-string a");
    let allMusic = await page.$$(".title.style-scope.ytmusic-responsive-list-item-renderer.complex-string a");
    let ytPlaylist = [];
    for(i = 0; i< allMusic.length; i++)
    {  
          ytPlaylist.push({ "song" : await page.evaluate(function(ele){
            return ele.textContent;
        }, allMusic[i])});
    }

    console.log(ytPlaylist);
    fs.writeFileSync("songNames.js", JSON.stringify(ytPlaylist));
    browser.close();
    await pasteOnSpotify();
}

async function autoScroll(page){


    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= scrollHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}


async function pasteOnSpotify(){

    let id ="mikex88617@684hh.com";
    let pass = "temp123*";
    let browser = await pup.launch({
        defaultViewport : false,
        headless : false,
        args: ["--start-fullscreen"]
        
    });

    const page = await browser.newPage();
    await page.goto("https://open.spotify.com/");
    await page.waitForSelector("button[data-testid='login-button']");
    await page.click("button[data-testid='login-button']")
    await page.waitForSelector("#login-username");
    await page.type("#login-username", id);
    await page.type("#login-password", pass);
    await page.click("#login-button");
    await page.waitForSelector("button[data-testid='create-playlist-button']");
    await new Promise((resolve)=>{
        setTimeout(() => {
            resolve();
        }, 1000);
    })
    await page.click("button[data-testid='create-playlist-button']");
    await page.waitForSelector("._655bc45ccbf3d91c685865ff470892eb-scss.f3fc214b257ae2f1d43d4c594a94497f-scss");


    //SEARCHING THE SCRAPPED DATA
    let data = fs.readFileSync("./songNames.js", "utf-8");
    data = JSON.parse(data);
    for(let i = 0; i< data.length; i++)
        data[i].song = data[i].song.replace("feat.", "");

    
    for(let i= 0; i< data.length; i++)
    {
        try{
            await page.click("._655bc45ccbf3d91c685865ff470892eb-scss.f3fc214b257ae2f1d43d4c594a94497f-scss");//INPUT BAR
            await page.type("._655bc45ccbf3d91c685865ff470892eb-scss.f3fc214b257ae2f1d43d4c594a94497f-scss", data[i].song.replace(/\([^()]*\)/g, ''));
            await new Promise((resolve)=>{
                return setTimeout(()=>{
                    resolve();
               }, 1000);
            });
            await page.click(".b490086127ec0ecdc7b170c03de9c5b1-scss");//ADD BUTTON
            await page.click("path[stroke='currentColor']");//CANCEL BUTTON
            await page.click("._655bc45ccbf3d91c685865ff470892eb-scss.f3fc214b257ae2f1d43d4c594a94497f-scss");//INPUT BAR
            new Promise((resolve)=>{
               return setTimeout(()=>{
                   resolve();
                }, 150);
            });   
        }
        catch{
            await page.click("path[stroke='currentColor']");//CANCEL BUTTON
            await page.click("._655bc45ccbf3d91c685865ff470892eb-scss.f3fc214b257ae2f1d43d4c594a94497f-scss");//INPUT BAR
            continue;
        }
    }

    browser.close();
}
copyYTMdata();


/////////////////////////////////////////////////////////
// let data = fs.readFileSync("./songNamescopy.js", "utf-8");
// data = JSON.parse(data);
// for(let i = 0; i< data.length; i++)
//     data[i].song = data[i].song.replace(/\([^()]*\)/g, '')

// console.log(data);



// pasteOnSpotify();
// copyYTMdata();

