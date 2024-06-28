import RatedBook from '@/components/shared/RatedBook'
import SideBar from '@/components/shared/SideBar'

const HomePage: React.FC = () => {
  return (
  <div className='flex gap-6'>
  <SideBar />
  <RatedBook />
  </div>
  )
}

export default HomePage
