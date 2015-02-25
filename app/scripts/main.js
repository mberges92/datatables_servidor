$(document).ready(function() {

    $("#miTabla").dataTable({

        "processing": true,
        "serverSide": true,
        "ajax": "php/cargar_clinicas_mejor.php",
        'columns': [{
               'data': 'idClinica'
           }, {
               'data': 'nombre'
           }, {
               'data': 'razonSocial'
           }, {
               'data': 'cif'
           }, {
               'data': 'localidad'
           }, {
               'data': 'provincia'
           }, {
               'data': 'direccion'
           }, {
               'data': 'numClinica'
           }, {
               'data': 'idTarifa'
           }, {
               'data': 'idClinica',
               'render': function(data) {
                   return '<a class="btn btn-primary" href=http://localhost/php/editar.php?id_clinica=' + data + '>Editar</a><a class="btn btn-warning" href=http://localhost/php/borrar.php?id_clinica=' + data + '>Borrar</a>';
               }
           }]

    }); // FIN DEL DATATABLE

}); // FIN DEL READY
