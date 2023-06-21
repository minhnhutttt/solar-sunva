import HomeMV from './components/home/mv';
import HomeAbout from './components/home/about';
import Point from './components/home/point/point';
import Problem from './components/home/problem/problem';
import Procedure from './components/home/procedure/procedure';
import Tutorial from './components/home/tutorial/tutorial';
import Compare from './components/home/compare';

export default function Home() {
  return (
    <main className="">
      <HomeMV />
      <HomeAbout />
      <Point />
      <Problem />
      <Procedure />
      <Tutorial />
      <Compare />
    </main>
  );
}
