import React, { useState, useEffect } from 'react'

export const GithubStats = () => {
  const username = "vimohbjj";
  const [stats, setStats] = useState({
    repos: 0,
    contributions: 0,
    followers: 0,
    thisYearContributions: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllStats();
  }, []);

  const fetchAllStats = async () => {
    try {
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      const userData = await userResponse.json();

      const contribResponse = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${username}`
      );
      const contribData = await contribResponse.json();
      
      const currentYear = new Date().getFullYear();
      const totalContributions = Object.values(contribData.total).reduce(
        (sum, yearTotal) => sum + yearTotal, 
        0
      );

      setStats({
        repos: userData.public_repos,
        contributions: totalContributions,
        thisYearContributions: contribData.total[currentYear] || 0,
        followers: userData.followers
      });
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  return (
    <section className='text-white bg-color-dark border-2 border-color-gray flex flex-col justify-evenly h-lvh'>
        <h3 className='text-xl sm:text-2xl text-green-700 text-center'>
            Github stats
        </h3>
        <article className='flex flex-col justify-center items-center '>
            <img className='w-11/12 p-5 border-4 rounded-lg border-green-700'
                src={`https://ghchart.rshah.org/3fb950/${username}`}  
                alt="GitHub Contributions"
            />
        </article>
        <article className='flex flex-col md:flex-row justify-evenly items-center sm:gap-0'>
            <div className='flex flex-col sm:flex-row justify-center items-center'>
                <div className='flex flex-col gap-1 justify-center items-center'>
                    <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl'> {loading ? '⏳' : stats.repos}  </h3>
                    <p>Repositories</p>
                </div>
                <div className='flex flex-col gap-1 justify-center items-center'>
                    <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>{loading ? '⏳' : stats.contributions.toLocaleString()}</h3>
                    <p>Total Contributions</p>
                </div>
            </div>
            <div className='flex flex-col gap-1 justify-center items-center'>
                <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl'> {loading ? '⏳' : stats.followers}</h3>
                <p>Followers</p>
            </div>
        </article>
    </section>
  )
}

export default GithubStats