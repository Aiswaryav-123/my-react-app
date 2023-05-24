import{useRouter} from 'next/router';

export default function Home() {
  const router=useRouter();
  //return (<h1>Hello , {router.query.name} from {router.query.place} Your age is {router.query.age}</h1>);
  //let sum = parseInt(router.query.a) + parseInt(router.query.b);
  //return (<h1>sum={sum}</h1>);
  return (
      <h1>
        {router.query.name? `Hello ${router.query.name}`:"I don't know your name"}
      </h1>
    )
}
