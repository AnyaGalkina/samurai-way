import {ActionType} from "./redux-store";
import {ArticleType, newsAPI, NewsParamsType} from "../api/news-api";
import {setGlobalError} from "./app-reducer";


const initialState = {
    articles: [
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Taylor Hatmaker",
            "title": "Meta is in trouble",
            "description": "Meta is in trouble Thursday, with shares plunging by 25%. The company is now worth almost a quarter of what it was last year.",
            "url": "https://techcrunch.com/2022/10/27/meta-stock-yikes/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/10/meta-distorted-glitched.jpg?resize=1200,675",
            "publishedAt": "2022-10-27T20:13:07Z",
            "content": "A day after weighing in with its third quarter earnings report, Meta is flailing. The company formerly known as Facebook was in trouble Thursday after uninspiring numbers and an apparent lack of fait… [+2643 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Dominic-madori Davis",
            "title": "How to raise funds when you aren’t in the Bay Area",
            "description": "At this year's TechCrunch Disrupt, three investors shared tips on how startup founders can fundraise outside of major tech hubs.",
            "url": "https://techcrunch.com/2022/10/27/how-to-raise-funds-when-you-arent-in-the-bay-area/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/10/FfdPECGUoAAjurI.jpg",
            "publishedAt": "2022-10-27T20:00:32Z",
            "content": "Perhaps sitting perched somewhere in sunny Miami, Florida, is a founder wondering the best ways to fundraise for a company when situated outside a traditional tech hub like the Bay Area.\r\nThey need n… [+799 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Anita Ramaswamy and Jacquelyn Melinek",
            "title": "Apple doesn't want you trading NFTs on your phone (unless it makes them money)",
            "description": "Apple is no stranger to asserting its dominance.  If you can’t join us in person in Miami, you can use the promo code REACT to get 25% off an annual...",
            "url": "https://techcrunch.com/2022/10/27/apple-reddit-nfts-app-store-chain-reaction-podcast/",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/IsRMImrNItwz1zbXFh8Z_w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/techcrunch_350/aed3f3b562e332e6576143046d89413c",
            "publishedAt": "2022-10-27T19:09:19Z",
            "content": "Apple is no stranger to asserting its dominance. That's exactly what the tech giant did this week when it announced new, stringent guidelines for NFT transactions in the iOS App Store, marking the fi… [+977 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Anita Ramaswamy and Jacquelyn Melinek",
            "title": "Apple says, 'NFTs? Yes, fees'",
            "description": "Last week, we recorded our news episode live onstage at TechCrunch Disrupt, in which we talked about the Aptos launch and shared our predictions for where we...",
            "url": "https://techcrunch.com/2022/10/27/chain-reaction-apple-nfts-reddit-rishi-sunak-podcast-newsletter/",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/72rqXoWnXWse78CIyJGbrQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/techcrunch_350/c7363a3e191ac13afeaf05fc8afe0d1b",
            "publishedAt": "2022-10-27T19:00:12Z",
            "content": "Image Credits: TechCrunch\r\nWelcome back to Chain Reaction.\r\nLast week, we recorded our news episode live onstage at TechCrunch Disrupt, in which we talked about the Aptos launch and shared our predic… [+4675 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Devin Coldewey",
            "title": "Physical 'copies' of the new Call of Duty are just empty discs",
            "description": "Cartridges and discs used to be how you got the latest games, but that's been changing as downloads have become more convenient and reliable. But some people prefer the sure thing: a physical copy, so they can play offline or with a bad connection. To",
            "url": "https://techcrunch.com/2022/10/27/physical-copies-of-the-new-call-of-duty-are-just-empty-discs/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/10/cod-physical.jpg?resize=1200,678",
            "publishedAt": "2022-10-27T18:58:35Z",
            "content": "Cartridges and discs used to be how you got the latest games, but that’s been changing as downloads have become more convenient and reliable. But some people prefer the sure thing: a physical copy, s… [+3680 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Brian Heater",
            "title": "Dawn of the tentacle",
            "description": "Berkshire Grey, which ran aground a stock dip following a 2021 SPAC deal, is an example of a company that recently \"made some updates.\"  The $75M commitment ...",
            "url": "https://techcrunch.com/2022/10/27/dawn-of-the-tentacle/",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/C9R0Yd3idwKs8Zsre8BWzQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04NTQ-/https://media.zenfs.com/en/techcrunch_350/3579a9b504b8b297c64ceb90d386db0e",
            "publishedAt": "2022-10-27T18:30:11Z",
            "content": "Fair warning, its going to be a quick one from me today. I caught the thing again, roughly three months after the last time I caught the thing. They say, third times the charm, and I now recognize th… [+7618 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Natasha Lomas",
            "title": "Google filing says EU's antitrust division is investigating Play Store practices",
            "description": "A Google regulatory filing appears to have confirmed rumors in recent months that the European Union's competition division is looking into how it operates its smartphone app store, the Play Store. However TechCrunch understands that no formal EU inve",
            "url": "https://techcrunch.com/2022/10/27/google-play-eu-antitrust/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/03/GettyImages-1235737290.jpeg",
            "publishedAt": "2022-10-27T18:19:01Z",
            "content": "A Google regulatory filing appears to have confirmed rumors in recent months that the European Union’s competition division is looking into how it operates its smartphone app store, the Play Store.\r\n… [+7248 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Lauren Forristal",
            "title": "Snapchat reduces total payouts for Spotlight creators",
            "description": "Snapchat has changed the way it pays creators through its Spotlight reward fund. Creators that use Snapchat’s TikTok clone, Spotlight, will now be paid millions per year, a source familiar with the matter told TechCrunch. This marks the second time Snapchat h…",
            "url": "https://techcrunch.com/2022/10/27/snapchat-reduces-total-payouts-for-spotlight-creators/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/12/Snapchat-Spotlight.jpg?resize=1200,675",
            "publishedAt": "2022-10-27T18:03:49Z",
            "content": "Snapchat has changed the way it pays creators through its Spotlight reward fund. Creators that use Snapchats TikTok clone, Spotlight, will now be paid millions per year, a source familiar with the ma… [+1495 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Rebecca Bellan",
            "title": "Uber to freeze fake rider account names, pilot front-facing video recording",
            "description": "Uber is releasing a suite of new safety features geared towards the driver, including freezing fake rider account names and piloting a front-facing video recording tool to replace a driver’s dashcam. The safety features follow a feedback period from drivers t…",
            "url": "https://techcrunch.com/2022/10/27/uber-to-freeze-fake-rider-account-names-pilot-front-facing-video-recording/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2016/01/uberx_driver2_color.jpg?resize=1200,799",
            "publishedAt": "2022-10-27T18:00:53Z",
            "content": "Uber is releasing a suite of new safety features geared towards the driver, including freezing fake rider account names and piloting a front-facing video recording tool to replace a driver’s dashcam.… [+2307 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Natasha Mascarenhas",
            "title": "Clubhouse's Paul Davison on Twitter, the impact of hype and what happened",
            "description": "Clubhouse CEO and co-founder Paul Davison came to TechCrunch Disrupt to talk about life after the hype and its most formidable competitor, Twitter. Clubhouse's Paul Davison on Twitter, the impact of hype and what happened by Natasha Mascarenhas origin",
            "url": "https://techcrunch.com/2022/10/27/clubhouses-paul-davison-on-twitter-the-impact-of-hype-and-what-happened/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/10/GettyImages-1435085968.jpg?resize=1200,800",
            "publishedAt": "2022-10-27T18:00:45Z",
            "content": "For most venture-backed social companies, a period of hypergrowth seems like it would be the dream. It means the app broke through the noise of thousands of others, resonated with a mass market of pe… [+1477 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Amanda Silberling",
            "title": "YouTube's ad revenue is declining, but creator economy experts aren't worried",
            "description": "The social platforms that power the creator economy might seem like they're starting to slip.  YouTube's quarterly ad revenue declined 1.9% year over year...",
            "url": "https://techcrunch.com/2022/10/27/youtubes-ad-revenue-is-declining-but-creator-economy-experts-arent-worried/",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/o25YG5pj8Zs11ouxKFne4A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/techcrunch_350/ff7d1bc851d7c15ddcd2b9a2bca61010",
            "publishedAt": "2022-10-27T17:51:14Z",
            "content": "The social platforms that power the creator economy might seem like they're starting to slip. YouTube's quarterly ad revenue declined 1.9% year over year, per Google parent company Alphabet's quarter… [+4936 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kirsten Korosec",
            "title": "The Tesla Cyberquad for Kids is being recalled over safety concerns",
            "description": "The Tesla Cyberquad for Kids, a $1,900 mini ATV inspired by the yet-to-be produced Cybertruck, is being recalled due to safety concerns flagged by the...",
            "url": "https://techcrunch.com/2022/10/27/tesla-cyberquad-for-kids-recalled-radio-flyer-safety-concerns/",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/iTovI31_WyE8xeXVvfU_Aw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04Mjg-/https://media.zenfs.com/en/techcrunch_350/333fb034813048af62f954011b66725a",
            "publishedAt": "2022-10-27T17:47:40Z",
            "content": "The Tesla Cyberquad for Kids, a $1,900 mini ATV inspired by the yet-to-be produced Cybertruck, is being recalled due to safety concerns flagged by the Consumer Product Safety Commission.\r\nRadio Flyer… [+1814 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Manish Singh",
            "title": "Google acquires Twitter-backed AI avatar startup Alter for $100 million",
            "description": "Google has acquired Alter, an artificial intelligence (AR) avatar startup that helps creators and brands express their virtual identity, for about $100 million, a source familiar with the matter told TechCrunch, in a push to boost its content game and bet",
            "url": "https://techcrunch.com/2022/10/27/google-acquires-twitter-backed-ai-avatar-startup-alter-for-100-million-source-says/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/10/google-alter-acquisition.jpg?resize=1200,676",
            "publishedAt": "2022-10-27T17:18:04Z",
            "content": "Google has acquired Alter, an artificial intelligence (AI) avatar startup that helps creators and brands express their virtual identity, for about $100 million, a source familiar with the matter told… [+1101 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Alex Wilhelm",
            "title": "Meta's metaverse wager is also a bet on founder control",
            "description": "Meta is not changing course even after shedding more than half of its value from 2021 highs amid public calls from investors for a course correction.",
            "url": "https://techcrunch.com/2022/10/27/metas-metaverse-wager-is-also-a-bet-on-founder-control/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/05/NSussman_Techcrunch_Exchange_v3-GRY2.jpg?resize=1200,900",
            "publishedAt": "2022-10-27T17:01:04Z",
            "content": "Meta’s other bet is making Alphabet’s long-running Other Bets segment appear cheap, both in cash and market cap terms.\r\nShares of Facebook’s parent company plummeted after the company reported huge c… [+1103 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Ivan Mehta",
            "title": "Telegram announces username auctions on TON blockchain",
            "description": "Telegram announced today that will it hold an auction for usernames — for both individual accounts and channels — through a marketplace built on top of the TON blockchain. In August, Telegram founder Pavel Durov first mentioned the idea by noting the possibil…",
            "url": "https://techcrunch.com/2022/10/27/telegram-announces-username-auctions-on-ton-blockchain/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/01/GettyImages-503572806.jpg?resize=1200,854",
            "publishedAt": "2022-10-27T16:42:33Z",
            "content": "Telegram announced today that will it hold an auction for usernames for both individual accounts and channels through a marketplace built on top of the TON blockchain.\r\nIn August, Telegram founder Pa… [+2965 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Devin Coldewey",
            "title": "Apple pauses gambling ads on App Store product pages after developer outcry",
            "description": "It’s hard to imagine anyone but advertisers being happy with Apple for putting more ads on the page in App Store listings, but the way they rolled it out was especially troubling. Ads for shady gambling apps quickly pervaded the platform, appearing in the “yo…",
            "url": "https://techcrunch.com/2022/10/27/apple-pauses-gambling-ads-on-app-store-product-pages-after-developer-outcry/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/02/Apple-Pornography-and-gambling-apps-Certificate.png?resize=1200,638",
            "publishedAt": "2022-10-27T16:39:02Z",
            "content": "It’s hard to imagine anyone but advertisers being happy with Apple for putting more ads on the page in App Store listings, but the way they rolled it out was especially troubling. Ads for shady gambl… [+2366 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "AWS makes Neptune, its graph database service, serverless",
            "description": "Nearly five years ago, Amazon Web Services (AWS) launched Neptune, a service for running apps that need a graph database to store and query connected data sets. Now, to keep up with the serverless trend, AWS is expanding the offering with Amazon Neptune Serve…",
            "url": "https://techcrunch.com/2022/10/27/aws-makes-neptune-its-graph-database-service-serverless/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/11/GettyImages-1236309559.jpg",
            "publishedAt": "2022-10-27T16:13:08Z",
            "content": "Nearly five years ago, Amazon Web Services (AWS) launched Neptune, a service for running apps that need a graph database to store and query connected data sets. Now, to keep up with the serverless tr… [+2641 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Lauren Forristal",
            "title": "VR gaming startup ForeVR Games raises $10M to grow its library of Wii Sports-like titles",
            "description": "ForeVR raised $10 million, which is being put towards more games that aim to establish the company as the “Wii Sports of VR.”",
            "url": "https://techcrunch.com/2022/10/27/vr-gaming-startup-forevr-games-raises-10m-to-grow-its-library-of-wii-sports-like-titles/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/10/MRC.png?resize=1200,675",
            "publishedAt": "2022-10-27T16:01:04Z",
            "content": "While Meta tries to convince users to attend virtual work meetings in its metaverse, ForeVR Games, a VR gaming startup with casual games like bowling, darts and cornhole, is a reminder that virtual r… [+2041 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Ron Miller",
            "title": "Thoma Bravo, Sunstone Partners to acquire UserTesting for $1.3B and combine it with UserZoom",
            "description": "Thoma Bravo and Sunstone Partners announced today that they’re acquiring customer insight platform UserTesting for $1.3 billion in an all-cash deal.  The...",
            "url": "https://techcrunch.com/2022/10/27/thoma-bravo-sunstone-partners-to-acquire-usertesting-for-1-3b-and-combine-it-with-userzoom/",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/LX5PcrSjDnhycRPL0r05rg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05NDc-/https://media.zenfs.com/en/techcrunch_350/12a9f6cc9bc10ce205b562dfba41fe0b",
            "publishedAt": "2022-10-27T15:45:04Z",
            "content": "Thoma Bravo and Sunstone Partners announced today that theyre acquiring customer insight platform UserTesting for $1.3 billion in an all-cash deal. The acquirers say they plan to combine it with User… [+2440 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Jacquelyn Melinek",
            "title": "Yuga Labs’ Nicole Muniz to talk about NFTs and Bored Apes at TC Sessions: Crypto",
            "description": "As the NFT ecosystem continues to waver, superfans and blue-chip holders are still holding on strong.  The number of NFT sales is down almost 90% from the...",
            "url": "https://techcrunch.com/2022/10/27/yuga-labs-nicole-muniz-to-talk-about-nfts-and-bored-apes-at-tc-sessions-crypto/",
            "urlToImage": "https://media.zenfs.com/en/techcrunch_350/30412a20e6a8e54d72464986940cd865",
            "publishedAt": "2022-10-27T15:30:56Z",
            "content": "As the NFT ecosystem continues to waver, superfans and blue-chip holders are still holding on strong. But how can the digital asset sector reignite growth and appeal to new audiences? The number of N… [+3356 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Mary Ann Azevedo",
            "title": "Uber alum rakes in $9.7M to curb finance-related fights between co-parents",
            "description": "The daughter of divorced parents herself, Uber alum Jacklyn Rome founded Onward to help co-parents more easily manage their shared expenses.\nUber alum rakes in $9.7M to curb finance-related fights between co-parents by Mary Ann Azevedo originally published on…",
            "url": "https://techcrunch.com/2022/10/27/uber-alum-raises-millions-for-fintech-app-aimed-at-helping-co-parents-bicker-less-over-finances/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/10/Onward-TechCrunch.jpg?resize=1200,675",
            "publishedAt": "2022-10-27T15:02:54Z",
            "content": "If youre a parent, one of the hardest things about getting divorced is still having to deal with your ex about financial matters regarding your children.\r\nAnd, according to a 2015 report, just 50.2% … [+4019 chars]"
        },
        {
            "source": {
                "id": "the-next-web",
                "name": "The Next Web"
            },
            "author": "The Conversation",
            "title": "Passionate about your job? Here’s why that might not be good for you",
            "description": "You might wish you were more passionate about your job. Or that you had the kind of job you could at least imagine being passionate about. Something that made you jump out of bed in the morning, excited about a new day filled with fist pumps and joy. But psyc…",
            "url": "https://thenextweb.com/news/passionate-about-your-job-heres-why-that-might-not-be-good-for-you",
            "urlToImage": "https://img-cdn.tnwcdn.com/image/tnw?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2022%2F02%2Foffice-apocalypse-1.jpeg&signature=e54ab1c82b7d2e73c1dd26c03d899038",
            "publishedAt": "2022-10-27T14:46:12Z",
            "content": "You might wish you were more passionate about your job. Or that you had the kind of job you could at least imagine being passionate about. Something that made you jump out of bed in the morning, exci… [+4015 chars]"
        }
    ]as Array<ArticleType>
}

type InitialStateType = typeof initialState;

export const newsReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case "GET_TOP_NEWS":
            return {...state, articles: action.payload.articles}
        default:
            return state
    }
}

export const setArticles = (articles: Array<ArticleType>) => {
    return ({type: "GET_TOP_NEWS", payload: {articles}} as const)
}


export const getTopNews = (params: NewsParamsType) => async (dispatch: any) => {
    try {
        const response = await newsAPI.getNews();
        dispatch(setArticles(response.data.articles));
    } catch (e: any) {
        dispatch(setGlobalError("Some error occurred"));
    }
}