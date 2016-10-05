import swal from 'sweetalert2';

function remove(opts) {
  const options = Object.assign({}, {
    title: 'Você tem certeza?',
    text: '',
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sim, remova-o',
    cancelButtonText: 'Cancelar',
  }, opts);

  return swal(options);
}

export default {
  remove,
};
