// write your custom hook here to control your checkout form
import { useLocalStorage } from './useLocalStorage';

export const useForm = (key, initialValue) => {
  const [value, setValue] = useLocalStorage(key, initialValue);
  const [showSuccessMessage, setShowSuccessMessage] = useLocalStorage('Success', false)

  const handleChanges = e => {
    setValue({...value, [e.target.name]:e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault()
    setShowSuccessMessage(true);
  };

  const clearForm = e => {
    e.preventDefault()
    localStorage.clear()
    setValue(initialValue)
    setShowSuccessMessage(false);
  };

  return [value, showSuccessMessage, handleChanges, handleSubmit, clearForm]
}