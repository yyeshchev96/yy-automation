import GradientText from '../GradientText'

export function WelcomeGradient() {
  return (
    <div>
      <h1 className="text-4xl font-extrabold leading-9 tracking-tight sm:text-5xl sm:leading-10 md:text-5xl md:leading-14">
        <GradientText>Hello and welcome &nbsp;</GradientText>
        👋
      </h1>
    </div>
  )
}
