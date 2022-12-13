/* 
    Used to attach the traffic source to the links on a page if the user switch domain after the first page load.
    The script will change ALL links so make sure that it's implemented correctly, or set up a filter for which links
    should be allowed. 
*/
(function(w,d){
    w.addEventListener("load", () => {
        d.querySelectorAll("a").forEach(link => {
            let href = link.getAttribute("href");
            let query = d.location.search.replace("?", "");
            let sep = href.includes("?") ? "&" : "?";
            let new_link = href + sep;
            
            if(query.match(/utm_source|gclid|wbraid|gbraid/)){
                new_link += query;
            } else {
                let [source, medium] = [d.referrer, "referral"];
                if(d.referrer.match(/https?:\/\/(www\.)?(google|bing|yahoo|ecosia)\..*/)){
                    [source, medium] = [d.referrer.match(/https?:\/\/(www\.)?(google|bing|yahoo|ecosia)\..*/)[2], "organic"];
                } else if(d.referrer.match(/https?:\/\/(www\.)?(facebook|instagram|youtube|twitter|linkedin|pinterest|snapchat|tiktok)\..*/)){
                    [source, medium] = [d.referrer.match(/https?:\/\/(www\.)?(facebook|instagram|youtube|twitter|linkedin|pinterest|snapchat|tiktok)\..*/)[2], "social"];
                }

                new_link += "utm_source=" + source + "&utm_medium=" + medium;
            }
        
            new_link += "&from_geo_selector=1";
        
            link.setAttribute("href", new_link);
        });
    });
})(window, document);