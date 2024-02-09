import { useGlobalContext } from '../../context/GlobalContext'
import Button from '../ui/Button'
import Card from '../ui/Card'

const Summary = () => {
  const { state: { userData } } = useGlobalContext()

  return (
    <section className="text-gray">
      <Card title="Summary">
        <article className="flex flex-col gap-y-1">
          <p>Name: <span className="text-semi-white font-[500]">{userData.name}</span></p>
          <p>Email: <span className="text-semi-white font-[500]">{userData.email}</span></p>
        </article>
        <article className="flex flex-col gap-y-1">
          <p>Topics:</p>
          <ul className="text-semi-white font-[500] list-disc pl-6">
            {userData.topics.map((topic, i) => (
              <li key={i}>{topic}</li>
            ))}
          </ul>
        </article>
        <Button value="Confirm" className="mt-2 self-center" />
      </Card>
    </section>
  )
}

export default Summary
