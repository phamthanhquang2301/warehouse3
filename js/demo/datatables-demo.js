// Call the dataTables jQuery plugin
$(document).ready(function () {
    var initialData = [
        { col_1: 'Data 1-1', col_2: 'Data 1-2', col_3: '', col_4: '', col_5: '' },
    ];

    $('#dataTable').DataTable({
        data: initialData,
        columns: [
            { title: 'Ngày nhập', data: 'col_1' },
            { title: 'Kệ 1', data: 'col_2' },
            { title: 'Kệ 2', data: 'col_3' },
            { title: 'Kệ 3', data: 'col_4' },
            { title: 'Kệ 4', data: 'col_5' },
        ],
    });
    // $('#dataTable').DataTable();
});
