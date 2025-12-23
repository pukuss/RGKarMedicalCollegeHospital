import React from 'react'
import useGithubApi from '../../Api/Github'




function Account() {
//  const accountDeta = useAccount()

const githubdeta = useGithubApi()
// console.log(githubdeta);



    return (
    <>
      <div className='h-9 w-9 border rounded-full overflow-hidden'>
        <img src={githubdeta.avatar_url} alt="" className=' object-cover h-full w-full' />
      </div>
    </>
  )
}

export default Account
