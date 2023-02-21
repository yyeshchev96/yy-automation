import PageTitle from '../PageTitle'

export function WelcomeGradient() {
  let wavingHandIcon = (
    <span role="img" aria-label="waving hand">
      👋
    </span>
  )
  return (
    <div>
      <PageTitle extra={wavingHandIcon}>Hello and welcome&nbsp;</PageTitle>
    </div>
  )
}
