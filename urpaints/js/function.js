function createPagination(pages, page,func) {
  let str = " " ;
  let active;
  let pageCutLow = page - 1;
  let pageCutHigh = page + 1;
  // Show the Previous button only if you are on a page other than the first
  if (page > 1) {
    str += '<a class="prev" style="cursor:pointer" onClick="'+func+'('+pages+','+(page-1)+');" ><img src="../images/left-arrow.png" width="22" height="22" alt=""/></a>';
  }
	str += '<ul>' ;
  // Show all the pagination elements if there are less than 6 pages total
  if (pages > 1 && pages < 6) {
    for (let p = 1; p <= pages; p++) {
      active = page == p ? "active" : "";
	  str += '<li><a style="cursor:pointer"; onClick="'+func+'('+pages+', '+p+');" id=page'+p+' class="num '+active+'">'+ p +'</a></li>';
    }
  }
  // Use "..." to collapse pages outside of a certain range
  else {
    // Show the very first page followed by a "..." at the beginning of the
    // pagination section (after the Previous button)
    if (page > 2) {
      str += '<li><a style="cursor:pointer"; onClick="'+func+'('+pages+', 1);" id=page1 class="num">1</a></li>';
      if (page > 3) {
          str += '<li><a style="cursor:pointer"; onClick="'+func+'('+pages+', '+(page-3)+');" class="num">...</a></li>';
      }
    }
    // Determine how many pages to show after the current page index
    if (page === 1) {
      pageCutHigh += 2;
    } else if (page === 2) {
      pageCutHigh += 1;
    }
    // Determine how many pages to show before the current page index
    if (page === pages) {
      pageCutLow -= 2;
    } else if (page === pages-1) {
      pageCutLow -= 1;
    }
    // Output the indexes for pages that fall inside the range of pageCutLow
    // and pageCutHigh
	if(pages > 1){
		for (let p = pageCutLow; p <= pageCutHigh; p++) {
		  if (p === 0) {
			p += 1;
		  }
		  if (p > pages) {
			continue
		  }
		  active = page == p ? "active" : "no";
		  str += '<li><a style="cursor:pointer"; onClick="'+func+'('+pages+', '+p+');" id=page'+p+' class="num '+active+'">'+ p +'</a></li>';
		}
	}
    // Show the very last page preceded by a "..." at the end of the pagination
    // section (before the Next button)
    if (page < pages-1) {
      if (page < pages-2) {
        str += '<li><a style="cursor:pointer"; onClick="'+func+'('+pages+', '+(page+2)+');" class="num">...</a></li>';
      }
      str += '<li><a style="cursor:pointer"; onClick="'+func+'('+pages+', '+pages+');" id=page'+pages+' class="num">'+ pages +'</a></li>';
    }
  }
	str += '</ul>';
  // Show the Next button only if you are on a page other than the last
  if (page < pages) {
    str += '<a class="next" style="cursor:pointer"; onClick="'+func+'('+pages+','+(page+1)+');"><img src="../images/right-arrow.png" width="22" height="22" alt=""/></a>';
  }

  // Return the pagination string to be outputted in the pug templates
  document.getElementById('pages').innerHTML = str;
  return str;
}

function createPaginationProject(pages, page,func) {
  let str = " " ;
  let active;
  let pageCutLow = page - 1;
  let pageCutHigh = page + 1;
  // Show the Previous button only if you are on a page other than the first
  if (page > 1) {
    str += '<a class="prev" style="cursor:pointer" onClick="'+func+'('+pages+','+(page-1)+');" ><img src="../images/left-arrow-project.png" width="22" height="22" alt=""/></a>';
  }
	str += '<ul>' ;
  // Show all the pagination elements if there are less than 6 pages total
  if (pages > 1 && pages < 6) {
    for (let p = 1; p <= pages; p++) {
      active = page == p ? "active" : "";
	  str += '<li><a style="cursor:pointer"; onClick="'+func+'('+pages+', '+p+');" id=page'+p+' class="num '+active+'">'+ p +'</a></li>';
    }
  }
  // Use "..." to collapse pages outside of a certain range
  else {
    // Show the very first page followed by a "..." at the beginning of the
    // pagination section (after the Previous button)
    if (page > 2) {
      str += '<li><a style="cursor:pointer"; onClick="'+func+'('+pages+', 1);" id=page1 class="num">1</a></li>';
      if (page > 3) {
          str += '<li><a style="cursor:pointer"; onClick="'+func+'('+pages+', '+(page-3)+');" class="num">...</a></li>';
      }
    }
    // Determine how many pages to show after the current page index
    if (page === 1) {
      pageCutHigh += 2;
    } else if (page === 2) {
      pageCutHigh += 1;
    }
    // Determine how many pages to show before the current page index
    if (page === pages) {
      pageCutLow -= 2;
    } else if (page === pages-1) {
      pageCutLow -= 1;
    }
    // Output the indexes for pages that fall inside the range of pageCutLow
    // and pageCutHigh
	if(pages > 1){
		for (let p = pageCutLow; p <= pageCutHigh; p++) {
		  if (p === 0) {
			p += 1;
		  }
		  if (p > pages) {
			continue
		  }
		  active = page == p ? "active" : "no";
		  str += '<li><a style="cursor:pointer"; onClick="'+func+'('+pages+', '+p+');" id=page'+p+' class="num '+active+'">'+ p +'</a></li>';
		}
	}
    // Show the very last page preceded by a "..." at the end of the pagination
    // section (before the Next button)
    if (page < pages-1) {
      if (page < pages-2) {
        str += '<li><a style="cursor:pointer"; onClick="'+func+'('+pages+', '+(page+2)+');" class="num">...</a></li>';
      }
      str += '<li><a style="cursor:pointer"; onClick="'+func+'('+pages+', '+pages+');" id=page'+pages+' class="num">'+ pages +'</a></li>';
    }
  }
	str += '</ul>';
  // Show the Next button only if you are on a page other than the last
  if (page < pages) {
    str += '<a class="next" style="cursor:pointer"; onClick="'+func+'('+pages+','+(page+1)+');"><img src="../images/right-arrow-project.png" width="22" height="22" alt=""/></a>';
  }

  // Return the pagination string to be outputted in the pug templates
  document.getElementById('pages').innerHTML = str;
  return str;
}

function createPaginationModel(pages, page,func) {
  let str = " " ;
  let active;
  let pageCutLow = page - 1;
  let pageCutHigh = page + 1;
  // Show the Previous button only if you are on a page other than the first
  if (page > 1) {
    str += '<a class="prev" style="cursor:pointer" onClick="'+func+'('+(page-1)+');" ><img src="../images/left-arrow-model.png" width="22" height="22" alt=""/></a>';
  }
	str += '<ul>' ;
  // Show all the pagination elements if there are less than 6 pages total
  if (pages > 1 && pages < 6) {
    for (let p = 1; p <= pages; p++) {
      active = page == p ? "active" : "";
	  str += '<li><a style="cursor:pointer"; onClick="'+func+'('+p+');" id=page'+p+' class="num '+active+'">'+ p +'</a></li>';
    }
  }
  // Use "..." to collapse pages outside of a certain range
  else {
    // Show the very first page followed by a "..." at the beginning of the
    // pagination section (after the Previous button)
    if (page > 2) {
      str += '<li><a style="cursor:pointer"; onClick="'+func+'(1);" id=page1 class="num">1</a></li>';
      if (page > 3) {
          str += '<li><a style="cursor:pointer"; onClick="'+func+'('+(page-3)+');" class="num">...</a></li>';
      }
    }
    // Determine how many pages to show after the current page index
    if (page === 1) {
      pageCutHigh += 2;
    } else if (page === 2) {
      pageCutHigh += 1;
    }
    // Determine how many pages to show before the current page index
    if (page === pages) {
      pageCutLow -= 2;
    } else if (page === pages-1) {
      pageCutLow -= 1;
    }
    // Output the indexes for pages that fall inside the range of pageCutLow
    // and pageCutHigh
	if(pages > 1){
		for (let p = pageCutLow; p <= pageCutHigh; p++) {
		  if (p === 0) {
			p += 1;
		  }
		  if (p > pages) {
			continue
		  }
		  active = page == p ? "active" : "no";
		  str += '<li><a style="cursor:pointer"; onClick="'+func+'('+p+');" id=page'+p+' class="num '+active+'">'+ p +'</a></li>';
		}
	}
    // Show the very last page preceded by a "..." at the end of the pagination
    // section (before the Next button)
    if (page < pages-1) {
      if (page < pages-2) {
        str += '<li><a style="cursor:pointer"; onClick="'+func+'('+(page+2)+');" class="num">...</a></li>';
      }
      str += '<li><a style="cursor:pointer"; onClick="'+func+'('+pages+');" id=page'+pages+' class="num">'+ pages +'</a></li>';
    }
  }
	str += '</ul>';
  // Show the Next button only if you are on a page other than the last
  if (page < pages) {
    str += '<a class="next" style="cursor:pointer"; onClick="'+func+'('+(page+1)+');"><img src="../images/right-arrow-model.png" width="22" height="22" alt=""/></a>';
  }

  // Return the pagination string to be outputted in the pug templates
  document.getElementById('pages').innerHTML = str;
  return str;
}

function createPaginationByBrand(pages, page,func,idc,idb,idt) {
  let str = " " ;
  let active;
  let pageCutLow = page - 1;
  let pageCutHigh = page + 1;
  // Show the Previous button only if you are on a page other than the first
  if (page > 1) {
    str += '<a class="prev" style="cursor:pointer" onClick="'+func+'('+pages+','+(page-1)+','+idc+','+idb+','+idt+');" ><img src="../images/left-arrow-model.png" width="22" height="22" alt=""/></a>';
  }
	str += '<ul>' ;
  // Show all the pagination elements if there are less than 6 pages total
  if (pages > 1 && pages < 6) {
    for (let p = 1; p <= pages; p++) {
      active = page == p ? "active" : "";
	  str += '<li><a style="cursor:pointer"; onClick="'+func+'('+pages+', '+p+','+idc+','+idb+','+idt+');" id=page'+p+' class="num '+active+'">'+ p +'</a></li>';
    }
  }
  // Use "..." to collapse pages outside of a certain range
  else {
    // Show the very first page followed by a "..." at the beginning of the
    // pagination section (after the Previous button)
    if (page > 2) {
      str += '<li><a style="cursor:pointer"; onClick="'+func+'('+pages+', 1,'+idc+','+idb+','+idt+');" id=page1 class="num">1</a></li>';
      if (page > 3) {
          str += '<li><a style="cursor:pointer"; onClick="'+func+'('+pages+', '+(page-3)+','+idc+','+idb+','+idt+');" class="num">...</a></li>';
      }
    }
    // Determine how many pages to show after the current page index
    if (page === 1) {
      pageCutHigh += 2;
    } else if (page === 2) {
      pageCutHigh += 1;
    }
    // Determine how many pages to show before the current page index
    if (page === pages) {
      pageCutLow -= 2;
    } else if (page === pages-1) {
      pageCutLow -= 1;
    }
    // Output the indexes for pages that fall inside the range of pageCutLow
    // and pageCutHigh
	if(pages > 1){
		for (let p = pageCutLow; p <= pageCutHigh; p++) {
		  if (p === 0) {
			p += 1;
		  }
		  if (p > pages) {
			continue
		  }
		  active = page == p ? "active" : "no";
		  str += '<li><a style="cursor:pointer"; onClick="'+func+'('+pages+', '+p+','+idc+','+idb+','+idt+');" id=page'+p+' class="num '+active+'">'+ p +'</a></li>';
		}
	}
    // Show the very last page preceded by a "..." at the end of the pagination
    // section (before the Next button)
    if (page < pages-1) {
      if (page < pages-2) {
        str += '<li><a style="cursor:pointer"; onClick="'+func+'('+pages+', '+(page+2)+','+idc+','+idb+','+idt+');" class="num">...</a></li>';
      }
      str += '<li><a style="cursor:pointer"; onClick="'+func+'('+pages+', '+pages+','+idc+','+idb+','+idt+');" id=page'+pages+' class="num">'+ pages +'</a></li>';
    }
  }
	str += '</ul>';
  // Show the Next button only if you are on a page other than the last
  if (page < pages) {
    str += '<a class="next" style="cursor:pointer"; onClick="'+func+'('+pages+','+(page+1)+','+idc+','+idb+','+idt+');"><img src="../images/right-arrow-model.png" width="22" height="22" alt=""/></a>';
  }
  // alert(str);
  // Return the pagination string to be outputted in the pug templates
  document.getElementById('pages').innerHTML = str;

  return str;
}

function createPaginationSearch(pages, page,func) {
  let str = " " ;
  let active;
  let pageCutLow = page - 1;
  let pageCutHigh = page + 1;
  // Show the Previous button only if you are on a page other than the first
  if (page > 1) {
    str += '<a class="prev" style="cursor:pointer" onClick="'+func+'('+pages+','+(page-1)+');" ><img src="../images/left-arrow-model.png" width="22" height="22" alt=""/></a>';
  }
	str += '<ul>' ;
  // Show all the pagination elements if there are less than 6 pages total
  if (pages > 1 && pages < 6) {
    for (let p = 1; p <= pages; p++) {
      active = page == p ? "active" : "";
	  str += '<li><a style="cursor:pointer"; onClick="'+func+'('+pages+', '+p+');" id=page'+p+' class="num '+active+'">'+ p +'</a></li>';
    }
  }
  // Use "..." to collapse pages outside of a certain range
  else {
    // Show the very first page followed by a "..." at the beginning of the
    // pagination section (after the Previous button)
    if (page > 2) {
      str += '<li><a style="cursor:pointer"; onClick="'+func+'('+pages+', 1);" id=page1 class="num">1</a></li>';
      if (page > 3) {
          str += '<li><a style="cursor:pointer"; onClick="'+func+'('+pages+', '+(page-3)+');" class="num">...</a></li>';
      }
    }
    // Determine how many pages to show after the current page index
    if (page === 1) {
      pageCutHigh += 2;
    } else if (page === 2) {
      pageCutHigh += 1;
    }
    // Determine how many pages to show before the current page index
    if (page === pages) {
      pageCutLow -= 2;
    } else if (page === pages-1) {
      pageCutLow -= 1;
    }
    // Output the indexes for pages that fall inside the range of pageCutLow
    // and pageCutHigh
	if(pages > 1){
		for (let p = pageCutLow; p <= pageCutHigh; p++) {
		  if (p === 0) {
			p += 1;
		  }
		  if (p > pages) {
			continue
		  }
      active = page == p ? "active" : "no";

      str += '<li><a style="cursor:pointer"; onClick="'+func+'('+pages+', '+p+');" id=page'+p+' name="step4" class="num '+active+'">'+ p +'</a></li>';

		}
	}
    // Show the very last page preceded by a "..." at the end of the pagination
    // section (before the Next button)
    if (page < pages-1) {
      if (page < pages-2) {
        str += '<li><a style="cursor:pointer"; onClick="'+func+'('+pages+', '+(page+2)+');" class="num">...</a></li>';
      }
      str += '<li><a style="cursor:pointer"; onClick="'+func+'('+pages+', '+pages+');" id=page'+pages+' class="num">'+ pages +'</a></li>';
    }
  }
	str += '</ul>';
  // Show the Next button only if you are on a page other than the last
  if (page < pages) {
    str += '<a class="next" style="cursor:pointer"; onClick="'+func+'('+pages+','+(page+1)+');"><img src="../images/right-arrow-model.png" width="22" height="22" alt=""/></a>';
  }

  // Return the pagination string to be outputted in the pug templates
  document.getElementById('pages').innerHTML = str;
  return str;
}