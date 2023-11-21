import { useState } from "react"
import "./LoginPage.css"

export default function LoginPage(props) {
  const [inputValue, setInputValue] = useState("")

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    props.setUser(inputValue)

    try {
        const formData = {...this.state}
        delete formData.error
        delete formData.confirm

        const user = await SignUpForm(formData)

    } catch {
        this.setState({ error: 'sign up failed - please try again'})
    }
  }

  return (
  <div className="full-screen-container">
    <div className="login-container">
      <h3 className="login-title">Who Are You?</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Name</label>
          <input type="text" onChange={handleChange} />
        </div>
        <button type="submit" className="login-button">Enter</button>
      </form>
    </div>
  </div>
  )
}