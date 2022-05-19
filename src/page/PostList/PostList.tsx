import React, { ReactElement, useEffect, useState } from "react";
import './PostList.scss'
import { PostCard } from '../../components/PostCard/PostCardd'
import { NavigationMenu } from '../../components/NavigationMenu/NavigationMenu'
import { Posts } from '../../components/Posts/Posts'
import { setTab } from '../../redux/reducers/tab';
import { useAppSelector } from '../../redux/hooks';
import { MyFavorites } from '../MyFavorites/MyFavorities'
import { Popular } from '../Popular/Popular'


type Post = {
    id?: number,
    image?: string,
    text?: string,
    date: string
    lesson_num?: number,
    title: string
    author?: number
}
const postsFormServer: Post[] = [
    {
        "id": 1,
        "image": 'https://s3-alpha-sig.figma.com/img/9d6a/ee8c/289deedaac77204e10cdde00c1ea8501?Expires=1653868800&Signature=EVfjAcZH~4zpHByVSr2jOshrsmNC~M8066nytHcmcvVB5FVhbljgNCPlTDo8HvAOO~BPlDQtIhOogHlPnOLc5K65w2Cz96I1uMbb66Nf46BrBWzaRKwN~Wd2xI2wWszG639UWshBcCDWX4z8FtwjMXTsOuyzrVhwQ-l50jAHvRbFQyQUhmLfv-d6eF9axsEc8xtiACLCCwxnjf3GFtawW7QSqrXQS3VTowITTKUR1NZuZQy5irmn56Lvori~yJTSAXUZVj4AUJLf354bWzcXb0pg4yt65uoijiDBnIGVaERjJzOX6g-uJYqTDst0w014D3BtrQeCGy3z0iebfiD6Vg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        "text": 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        "date": "2021-10-06",
        "lesson_num": 123,
        "title": 'Astronauts prep for new solar arrays on nearly seven-hour space',
        "author": 7
    },
    {
        "id": 2,
        "image": 'https://s3-alpha-sig.figma.com/img/9d6a/ee8c/289deedaac77204e10cdde00c1ea8501?Expires=1653868800&Signature=EVfjAcZH~4zpHByVSr2jOshrsmNC~M8066nytHcmcvVB5FVhbljgNCPlTDo8HvAOO~BPlDQtIhOogHlPnOLc5K65w2Cz96I1uMbb66Nf46BrBWzaRKwN~Wd2xI2wWszG639UWshBcCDWX4z8FtwjMXTsOuyzrVhwQ-l50jAHvRbFQyQUhmLfv-d6eF9axsEc8xtiACLCCwxnjf3GFtawW7QSqrXQS3VTowITTKUR1NZuZQy5irmn56Lvori~yJTSAXUZVj4AUJLf354bWzcXb0pg4yt65uoijiDBnIGVaERjJzOX6g-uJYqTDst0w014D3BtrQeCGy3z0iebfiD6Vg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        "text": 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        "date": "2021-10-07",
        "lesson_num": 48,
        "title": 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        "author": 7
    },
    {
        "id": 3,
        "image": 'https://s3-alpha-sig.figma.com/img/9d6a/ee8c/289deedaac77204e10cdde00c1ea8501?Expires=1653868800&Signature=EVfjAcZH~4zpHByVSr2jOshrsmNC~M8066nytHcmcvVB5FVhbljgNCPlTDo8HvAOO~BPlDQtIhOogHlPnOLc5K65w2Cz96I1uMbb66Nf46BrBWzaRKwN~Wd2xI2wWszG639UWshBcCDWX4z8FtwjMXTsOuyzrVhwQ-l50jAHvRbFQyQUhmLfv-d6eF9axsEc8xtiACLCCwxnjf3GFtawW7QSqrXQS3VTowITTKUR1NZuZQy5irmn56Lvori~yJTSAXUZVj4AUJLf354bWzcXb0pg4yt65uoijiDBnIGVaERjJzOX6g-uJYqTDst0w014D3BtrQeCGy3z0iebfiD6Vg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        "text": 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        "date": "2021-10-07",
        "lesson_num": 23,
        "title": 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        "author": 97
    },
    {
        "id": 4,
        "image": 'https://s3-alpha-sig.figma.com/img/9d6a/ee8c/289deedaac77204e10cdde00c1ea8501?Expires=1653868800&Signature=EVfjAcZH~4zpHByVSr2jOshrsmNC~M8066nytHcmcvVB5FVhbljgNCPlTDo8HvAOO~BPlDQtIhOogHlPnOLc5K65w2Cz96I1uMbb66Nf46BrBWzaRKwN~Wd2xI2wWszG639UWshBcCDWX4z8FtwjMXTsOuyzrVhwQ-l50jAHvRbFQyQUhmLfv-d6eF9axsEc8xtiACLCCwxnjf3GFtawW7QSqrXQS3VTowITTKUR1NZuZQy5irmn56Lvori~yJTSAXUZVj4AUJLf354bWzcXb0pg4yt65uoijiDBnIGVaERjJzOX6g-uJYqTDst0w014D3BtrQeCGy3z0iebfiD6Vg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        "text": 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        "date": "2021-10-07",
        "lesson_num": 22,
        "title": 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        "author": 97
    },
    {
        "id": 5,
        "image": 'https://s3-alpha-sig.figma.com/img/9d6a/ee8c/289deedaac77204e10cdde00c1ea8501?Expires=1653868800&Signature=EVfjAcZH~4zpHByVSr2jOshrsmNC~M8066nytHcmcvVB5FVhbljgNCPlTDo8HvAOO~BPlDQtIhOogHlPnOLc5K65w2Cz96I1uMbb66Nf46BrBWzaRKwN~Wd2xI2wWszG639UWshBcCDWX4z8FtwjMXTsOuyzrVhwQ-l50jAHvRbFQyQUhmLfv-d6eF9axsEc8xtiACLCCwxnjf3GFtawW7QSqrXQS3VTowITTKUR1NZuZQy5irmn56Lvori~yJTSAXUZVj4AUJLf354bWzcXb0pg4yt65uoijiDBnIGVaERjJzOX6g-uJYqTDst0w014D3BtrQeCGy3z0iebfiD6Vg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        "text": 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        "date": "2021-10-07",
        "lesson_num": 59,
        "title": 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        "author": 97
    },
    {
        "id": 6,
        "image": 'https://s3-alpha-sig.figma.com/img/9d6a/ee8c/289deedaac77204e10cdde00c1ea8501?Expires=1653868800&Signature=EVfjAcZH~4zpHByVSr2jOshrsmNC~M8066nytHcmcvVB5FVhbljgNCPlTDo8HvAOO~BPlDQtIhOogHlPnOLc5K65w2Cz96I1uMbb66Nf46BrBWzaRKwN~Wd2xI2wWszG639UWshBcCDWX4z8FtwjMXTsOuyzrVhwQ-l50jAHvRbFQyQUhmLfv-d6eF9axsEc8xtiACLCCwxnjf3GFtawW7QSqrXQS3VTowITTKUR1NZuZQy5irmn56Lvori~yJTSAXUZVj4AUJLf354bWzcXb0pg4yt65uoijiDBnIGVaERjJzOX6g-uJYqTDst0w014D3BtrQeCGy3z0iebfiD6Vg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        "text": 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        "date": "2021-10-07",
        "lesson_num": 44,
        "title": 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        "author": 99
    },
    {
        "id": 7,
        "image": 'https://s3-alpha-sig.figma.com/img/9d6a/ee8c/289deedaac77204e10cdde00c1ea8501?Expires=1653868800&Signature=EVfjAcZH~4zpHByVSr2jOshrsmNC~M8066nytHcmcvVB5FVhbljgNCPlTDo8HvAOO~BPlDQtIhOogHlPnOLc5K65w2Cz96I1uMbb66Nf46BrBWzaRKwN~Wd2xI2wWszG639UWshBcCDWX4z8FtwjMXTsOuyzrVhwQ-l50jAHvRbFQyQUhmLfv-d6eF9axsEc8xtiACLCCwxnjf3GFtawW7QSqrXQS3VTowITTKUR1NZuZQy5irmn56Lvori~yJTSAXUZVj4AUJLf354bWzcXb0pg4yt65uoijiDBnIGVaERjJzOX6g-uJYqTDst0w014D3BtrQeCGy3z0iebfiD6Vg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        "text": 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        "date": "2021-10-07",
        "lesson_num": 441,
        "title": 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        "author": 99
    },
    {
        "id": 8,
        "image": 'https://s3-alpha-sig.figma.com/img/9d6a/ee8c/289deedaac77204e10cdde00c1ea8501?Expires=1653868800&Signature=EVfjAcZH~4zpHByVSr2jOshrsmNC~M8066nytHcmcvVB5FVhbljgNCPlTDo8HvAOO~BPlDQtIhOogHlPnOLc5K65w2Cz96I1uMbb66Nf46BrBWzaRKwN~Wd2xI2wWszG639UWshBcCDWX4z8FtwjMXTsOuyzrVhwQ-l50jAHvRbFQyQUhmLfv-d6eF9axsEc8xtiACLCCwxnjf3GFtawW7QSqrXQS3VTowITTKUR1NZuZQy5irmn56Lvori~yJTSAXUZVj4AUJLf354bWzcXb0pg4yt65uoijiDBnIGVaERjJzOX6g-uJYqTDst0w014D3BtrQeCGy3z0iebfiD6Vg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        "text": 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        "date": "2021-10-08",
        "lesson_num": 100,
        "title": 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        "author": 122
    },
    {
        "id": 9,
        "image": 'https://s3-alpha-sig.figma.com/img/9d6a/ee8c/289deedaac77204e10cdde00c1ea8501?Expires=1653868800&Signature=EVfjAcZH~4zpHByVSr2jOshrsmNC~M8066nytHcmcvVB5FVhbljgNCPlTDo8HvAOO~BPlDQtIhOogHlPnOLc5K65w2Cz96I1uMbb66Nf46BrBWzaRKwN~Wd2xI2wWszG639UWshBcCDWX4z8FtwjMXTsOuyzrVhwQ-l50jAHvRbFQyQUhmLfv-d6eF9axsEc8xtiACLCCwxnjf3GFtawW7QSqrXQS3VTowITTKUR1NZuZQy5irmn56Lvori~yJTSAXUZVj4AUJLf354bWzcXb0pg4yt65uoijiDBnIGVaERjJzOX6g-uJYqTDst0w014D3BtrQeCGy3z0iebfiD6Vg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        "text": 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        "date": "2021-10-08",
        "lesson_num": 49,
        "title": 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        "author": 123
    },
    {
        "id": 10,
        "image": 'https://s3-alpha-sig.figma.com/img/9d6a/ee8c/289deedaac77204e10cdde00c1ea8501?Expires=1653868800&Signature=EVfjAcZH~4zpHByVSr2jOshrsmNC~M8066nytHcmcvVB5FVhbljgNCPlTDo8HvAOO~BPlDQtIhOogHlPnOLc5K65w2Cz96I1uMbb66Nf46BrBWzaRKwN~Wd2xI2wWszG639UWshBcCDWX4z8FtwjMXTsOuyzrVhwQ-l50jAHvRbFQyQUhmLfv-d6eF9axsEc8xtiACLCCwxnjf3GFtawW7QSqrXQS3VTowITTKUR1NZuZQy5irmn56Lvori~yJTSAXUZVj4AUJLf354bWzcXb0pg4yt65uoijiDBnIGVaERjJzOX6g-uJYqTDst0w014D3BtrQeCGy3z0iebfiD6Vg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        "text": 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        "date": "2021-10-08",
        "lesson_num": 49,
        "title": 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        "author": 123
    },
    {
        "id": 11,
        "image": 'https://s3-alpha-sig.figma.com/img/9d6a/ee8c/289deedaac77204e10cdde00c1ea8501?Expires=1653868800&Signature=EVfjAcZH~4zpHByVSr2jOshrsmNC~M8066nytHcmcvVB5FVhbljgNCPlTDo8HvAOO~BPlDQtIhOogHlPnOLc5K65w2Cz96I1uMbb66Nf46BrBWzaRKwN~Wd2xI2wWszG639UWshBcCDWX4z8FtwjMXTsOuyzrVhwQ-l50jAHvRbFQyQUhmLfv-d6eF9axsEc8xtiACLCCwxnjf3GFtawW7QSqrXQS3VTowITTKUR1NZuZQy5irmn56Lvori~yJTSAXUZVj4AUJLf354bWzcXb0pg4yt65uoijiDBnIGVaERjJzOX6g-uJYqTDst0w014D3BtrQeCGy3z0iebfiD6Vg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        "text": 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        "date": "2021-10-08",
        "lesson_num": 49,
        "title": 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        "author": 123
    }
]



export const PostList = () => {

    const [infoPosts, setInfoPosts] = useState<Post[]>([])

    useEffect(() => {

        setTimeout(() => {

            setInfoPosts(postsFormServer)

        }, 0)
    }, [])

    const tab = useAppSelector(state => state.tab.value);

    return (
        <div className="post-list">
            <div className="post-list__section">

                <h1 className="post-list__h1">Blog</h1>
                
                < NavigationMenu />

                {tab === 'all' 
                && 
                    (infoPosts.length === 0 
                    ? 
                    <p className="post-list__loading">Loading data...</p> 
                    : 
                    < Posts posts={infoPosts}/>)}

                {tab === 'favorites'
                &&
                <MyFavorites/>}

                {tab === 'popular'
                &&
                <Popular/>}
            </div>
        </div>
    )
}