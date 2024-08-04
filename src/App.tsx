import { assets } from './assets'
import { Container, Main, Wrapper } from './components'

type DetailContentProps = {
  icon: string
  text: string
}

const detailContentProps: DetailContentProps[] = [
  {
    icon: assets.iconEthereum,
    text: '0.041 ETH'
  },
  {
    icon: assets.iconClock,
    text: '3 days left'
  }
]

export default function App() {

  function detailContent() {


    return (
      detailContentProps.map((detail, index) => (
        <div key={index} className='flex flex-nowrap gap-4 justify-between'>
          <img className={`${detail.icon == assets.iconEthereum ? 'w-[.8rem]' : 'w-[1.5rem] aspect-square'}`} src={detail.icon} alt="" />
          <span className={`${detail.icon == assets.iconEthereum ? 'font-outfit text-cyan' : 'text-blue-soft'}`}>
            {detail.text}
          </span>
        </div>
      ))
    )
  }

  return (
    <Main className='bg-blue-very-dark-main grid place-items-center min-w-full'>
      <Container className='max-w-[350px] w-full min-h-[543px] sm:min-h-[596px] px-[24px] bg-blue-very-dark-card rounded-[15px] p-[24px] flex flex-col justify-between gap-4'>
        <Wrapper className='relative flex flex-nowrap justify-center items-center before:absolute before:w-full before:aspect-square before:bg-center hover:before:bg-eye before:hover:bg-cyan hover:before:bg-opacity-50 before:bg-no-repeat before:transition-all duration-300 cursor-pointer before:rounded-[8px]'>
          <img className='rounded-[8px] cursor-pointer ' src={assets.imageEquilibrium} alt="Equilibrium" />
        </Wrapper>

        <h1 className='font-outfit font-bold text-[22px] text-white hover:text-cyan transition-colors duration-300 cursor-pointer'>
          Equilibrium #3429
        </h1>

        <p className='font-outfit text-blue-soft text-[18px] font-thin'>
          Our Equilibrium collection promotes balance and calm.
        </p>

        <Wrapper className='flex flex-row flex-nowrap justify-between'>
          {detailContent()}
        </Wrapper>

        <Wrapper className='flex flex-nowrap gap-4 pt-[16px] border-t border-t-blue-very-dark-line'>
          <img className='w-[32px] aspect-square border border-white rounded-[50%]' src={assets.imageAvatar} alt="Avatar" />
          <p className='font-outfit text-blue-soft'>Creation of <span className='text-white hover:text-cyan transition-colors duration-300 cursor-pointer'>Jules Wyvern</span></p>
        </Wrapper>
      </Container>
    </Main>
  )
}
