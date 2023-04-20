import {Link} from 'react-router-dom'

import './index.css'

// bugs identified are
// 1. exact key word is used to the link path.
// 2. "path" key word is used instead of "to"
// 3. specified wrong path as /team/${id} instead of /team-matches/${id}
// 4. not imported Link component from react-router-dom
// 5. In CSS file class name written as "link" instead of link-item
const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, teamImageURL} = teamDetails

  return (
    <li className="team-item">
      <Link to={`/team-matches/${id}`} className="link-item">
        <img src={teamImageURL} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
