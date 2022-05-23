import React from 'react';
import { Button } from './components/Button/Button'
import { ReactComponent as Bookmark } from './components/Button/icon/like.svg'
import { ReactComponent as Like } from './components/Button/icon/like.svg'
import { ReactComponent as Dislike } from './components/Button/icon/dislike.svg'
import { PostList } from './page/PostList';
import { Post } from './page/Post/Post'

function App() {

  return (
    <div className="App">
      <PostList></PostList>
        {/* <Post 
          id={3}
          titlePost='Astronauts prep for new solar arrays on nearly seven-hour space' 
          img='https://s3-alpha-sig.figma.com/img/9d6a/ee8c/289deedaac77204e10cdde00c1ea8501?Expires=1653868800&Signature=EVfjAcZH~4zpHByVSr2jOshrsmNC~M8066nytHcmcvVB5FVhbljgNCPlTDo8HvAOO~BPlDQtIhOogHlPnOLc5K65w2Cz96I1uMbb66Nf46BrBWzaRKwN~Wd2xI2wWszG639UWshBcCDWX4z8FtwjMXTsOuyzrVhwQ-l50jAHvRbFQyQUhmLfv-d6eF9axsEc8xtiACLCCwxnjf3GFtawW7QSqrXQS3VTowITTKUR1NZuZQy5irmn56Lvori~yJTSAXUZVj4AUJLf354bWzcXb0pg4yt65uoijiDBnIGVaERjJzOX6g-uJYqTDst0w014D3BtrQeCGy3z0iebfiD6Vg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
          text='Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.'
        /> */}
    </div>
  );
}

export default App;