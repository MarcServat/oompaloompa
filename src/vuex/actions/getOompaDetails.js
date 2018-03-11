import { HttpService } from '../../Services/HttpService'
import { url } from '../../config/constants'
import swal from 'sweetalert2'

export const getOompaDetails = ({state, commit}, id) => {
  const detailsUrl = `${url}/${id}`
  HttpService.get(detailsUrl).then(res => {
    commit('setOompaDetails', res.data)
  }).catch(() => {
    swal({
      type: 'error',
      title: 'Oops...',
      text: 'Something went wrong!'
    })
  })
}
