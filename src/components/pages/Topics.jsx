import TopicsForm from '../containers/TopicsForm'
import Card from '../ui/Card'

const Topics = () => {
  return (
    <section>
      <Card title='Which topics you are interested in?'>
        <TopicsForm />
      </Card>
    </section>
  )
}

export default Topics
