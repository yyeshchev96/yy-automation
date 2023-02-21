import PageTitle from '../PageTitle'

export function WelcomeGradient() {
  let wavingHandIcon = (
    <span role="img" aria-label="waving hand">
      👋
    </span>
  )
  return (
    <div className="mb-6">
      <PageTitle extra={wavingHandIcon}>Hello and welcome&nbsp;</PageTitle>
    </div>
  )
}
