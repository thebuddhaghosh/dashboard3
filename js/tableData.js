$(document).ready(function () {
  let myTable = $('#example').DataTable({
    // Custom DOM structure matching your exact layout
    dom: `
      <'top-header mt-3'<'tableTitle'T><'buttonsWrapper'>'<'search'f><'filter'B>>
      <'tableContent pb-0'tr>
      <'tableFooterBottom'<'left'i><'right'p>>
    `,
    
    // Custom title
    language: {
      emptyTable: "No data available in table",
      info: "Showing _START_ to _END_ of _TOTAL_ entries",
      infoEmpty: "Showing 0 to 0 of 0 entries",
      infoFiltered: "(filtered from _MAX_ total entries)",
      lengthMenu: "Show _MENU_ entries per page",
      search: "_INPUT_",
      searchPlaceholder: "Search table...",
      paginate: {
        first: '<i class="fas fa-angle-double-left"></i>',
        last: '<i class="fas fa-angle-double-right"></i>',
        next: '<i class="fas fa-angle-right"></i>',
        previous: '<i class="fas fa-angle-left"></i>'
      }
    },
    
    // Column definitions for checkbox
    columnDefs: [
      {
        orderable: false,
        className: 'select-checkbox',
        targets: 0,
        width: '1%'
      }
    ],
    
    select: {
      style: 'os',
      selector: 'td.select-checkbox'
    },
    
    // Custom buttons configuration
    buttons: [
      {
        extend: 'searchBuilder',
        className: 'btn btn-sm btn-info me-1 text-white',
        text: '<i class="fas fa-filter"></i> Filter'
      },
          
      {
        extend: 'excel',
        className: 'btn btn-sm btn-primary me-1 text-white',
        text: '<i class="fas fa-file-excel"></i> Excel'
      },
      {
        extend: 'pdf',
        className: 'btn btn-sm btn-danger text-white',
        text: '<i class="fas fa-file-pdf"></i> PDF'
      }
    ],
    
    order: [[1, 'asc']],
    lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]],
    pageLength: 10,
    responsive: true
  });

  // Select all functionality
  $('#MyTableCheckAllButton').on('click', function () {
    let countSelected = myTable.rows({ selected: true }).count();
    let totalRows = myTable.rows().count();

    if (countSelected === totalRows) {
      myTable.rows().deselect();
      $(this).find('i').removeClass('fa-check-square').addClass('fa-square');
    } else {
      myTable.rows().select();
      $(this).find('i').removeClass('fa-square fa-minus-square').addClass('fa-check-square');
    }
  });

  // Visual feedback for selection
  myTable.on('select deselect', function () {
    let countSelected = myTable.rows({ selected: true }).count();
    let totalRows = myTable.rows().count();
    let $button = $('#MyTableCheckAllButton i');

    if (countSelected === 0) {
      $button.removeClass('fa-check-square fa-minus-square').addClass('fa-square');
    } else if (countSelected === totalRows) {
      $button.removeClass('fa-square fa-minus-square').addClass('fa-check-square');
    } else {
      $button.removeClass('fa-square fa-check-square').addClass('fa-minus-square');
    }
  });

  // Custom CSS for perfect layout (add to your main.css)
  $(myTable.table().container()).addClass('custom-datatable');
});
