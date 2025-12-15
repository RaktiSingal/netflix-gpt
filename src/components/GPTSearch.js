import GPTSearchBar from './GPTSearchBar'
import GPTSuggestions from './GPTSuggestions'

const GPTSearch = () => {
  return (
    <div className="bg-black h-full">
      <GPTSearchBar />
      <GPTSuggestions />
    </div>
  )
}

export default GPTSearch