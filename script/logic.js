import { Cont } from "../module/main.mjs";
import { GithubStatCard, StreakStatsCard, ActivityGraphCard, GithubPofileTrophy, ReadmeJokesCard} from "../module/data.mjs";
const cls = document.body.className;
const main = (data, url) => {
  let cs = new Cont(data, url);
  cs.render();
};
const title = (x) =>{
    document.title = x;
} 
// github_stat_card_theme
if (cls == "GithubStatCard") {
  const url = `https://github-readme-stats.vercel.app/api?username=cx0y&count_private=true&theme=`;
  main(GithubStatCard, url);
  title(cls)
} 
// streak_stats_card
else if (cls == "StreakStatsCard") {
  const url = `https://github-readme-streak-stats.herokuapp.com?user=cx0y&theme=`;
  main(StreakStatsCard, url)
  title(cls);
}
// activity_graph_card
else if (cls == "ActivityGraphCard"){
  const url = `https://activity-graph.herokuapp.com/graph?username=cx0y&theme=`
  main(ActivityGraphCard, url)
  title(cls);
}
else if (cls == "GithubPofileTrophy"){
  const url = `https://github-profile-trophy.vercel.app/?username=cx0y&column=3&margin-w=15&margin-h=15&theme=`
  main(GithubPofileTrophy, url)
  title(cls);
}
else if (cls == "ReadmeJokesCard"){
  const url = `https://readme-jokes.vercel.app/api?theme=`
  main(ReadmeJokesCard, url)
  title(cls);
}
else{
    document.body.innerHTML = `err`;
}