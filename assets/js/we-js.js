var dt = new Date();
var time = dt.getHours() + ":" + dt.getMinutes();
    $('#addbut').click(function (){
    var ssl =prompt("HI");
    $( "#chatContactTab" ).append( `<li class="contacts-item friends active">
    <a class="contacts-link" id="contacts-link" href="javascript:;">
    <div class="avatar avatar-online">
        <img src="../../assets/media/avatar/2.png" alt="">
    </div>
    <div class="contacts-content">
        <div class="contacts-info">
            <h6 class="chat-name text-truncate">${ssl}</h6>
            <div class="chat-time">${time}</div>
        </div>
        <div class="contacts-texts">
            <p class="text-truncate">I’m sorry, I didn’t catch that. Could you please repeat?</p>
        </div>
    </div>
    </a>
    </li>` );
    });

    $('#addbut2').click(function (){
    var ssl =prompt("HI");
    $( "#chatContactTab" ).append( `<li class="contacts-item friends">
    <a class="contacts-link" href="#">
        <div class="avatar avatar-busy">
        <img src="../../assets/media/avatar/3.png" alt=""></div>
        <div class="contacts-content">
            <div class="contacts-info">
                <h6 class="chat-name">${ssl}</h6>
                <div class="chat-time"><span>${time}</span></div>
            </div>
            <div class="contacts-texts">
                <svg class="hw-20 text-muted" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path>
                </svg>
                <p class="text-truncate">Photo</p>
            </div>
        </div>
    </a>
    </li>` );
    });

    $('#addbut3').click(function (){
    var ssl =prompt("HI");
    $( "#chatContactTab" ).append( `<li class="contacts-item friends unread">
    <a class="contacts-link" href="#">
        <div class="avatar avatar-offline bg-info text-light">
            <span>EW</span>
        </div>
        <div class="contacts-content">
            <div class="contacts-info">
                <h6 class="chat-name">${ssl}</h6>
                <div class="chat-time">${time}</div>
            </div>
            <div class="contacts-texts">
                <p class="text-truncate">You’re kidding! I drive a motorcycle as well. What type of bike do you have?</p>
                <div class="badge badge-rounded badge-primary ml-1">2</div>
            </div>
        </div>
    </a>
    </li>` );
    });

    $('#addbut4').click(function (){
    this
    $( ".chats" ).children().remove();
    $( ".chats" ).append( `
<div class="chat-body">
<div class="chat-header">
<!-- Chat Back Button (Visible only in Small Devices) -->
<button class="btn btn-secondary btn-icon btn-minimal btn-sm text-muted d-xl-none" type="button" data-close="">
<!-- Default :: Inline SVG -->
<svg class="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
</svg>

<!-- Alternate :: External File link -->
<!-- <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/arrow-left.svg" alt=""> -->
</button>

<!-- Chat participant's Name -->
<div class="media chat-name align-items-center text-truncate">
<div class="avatar avatar-online d-none d-sm-inline-block mr-3">
<img src="../../assets/media/avatar/2.png" alt="">
</div>

<div class="media-body align-self-center ">
<h6 class="text-truncate mb-0">Catherine Richardson</h6>
<small class="text-muted">Online</small>
</div>
</div>

<!-- Chat Options -->
<ul class="nav flex-nowrap">
<li class="nav-item list-inline-item d-none d-sm-block mr-1">
<a class="nav-link text-muted px-1" data-toggle="collapse" data-target="#searchCollapse" href="#" aria-expanded="false">
    <!-- Default :: Inline SVG -->
    <svg class="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
    </svg>

    <!-- Alternate :: External File link -->
    <!-- <img src="./../../assets/media/heroicons/outline/search.svg" alt="" class="injectable hw-20"> -->
</a>
</li>

<li class="nav-item list-inline-item d-none d-sm-block mr-1">
<a class="nav-link text-muted px-1" href="#" title="Add People">
    <!-- Default :: Inline SVG -->
    <svg class="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
    </svg>

    <!-- Alternate :: External File link -->
    <!-- <img src="./../../assets/media/heroicons/outline/phone.svg" alt="" class="injectable hw-20"> -->
</a>
</li>
<li class="nav-item list-inline-item d-none d-sm-block mr-0">
<div class="dropdown">
    <a class="nav-link text-muted px-1" href="#" role="button" title="Details" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <!-- Default :: Inline SVG -->
        <svg class="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
        </svg>

        <!-- Alternate :: External File link -->
        <!-- <img src="./../../assets/media/heroicons/outline/dots-vertical.svg" alt="" class="injectable hw-20"> -->
    </a>

    <div class="dropdown-menu dropdown-menu-right custom-rtl">
        <a class="dropdown-item align-items-center d-flex" href="#" data-chat-info-toggle="">
            <!-- Default :: Inline SVG -->
            <svg class="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
              
            <!-- Alternate :: External File link -->
            <!-- <img src="./../../assets/media/heroicons/outline/information-circle.svg" alt="" class="injectable hw-20 mr-2"> -->
            <span>View Info</span>
        </a>

        <a class="dropdown-item align-items-center d-flex" href="#">
            <!-- Default :: Inline SVG -->
            <svg class="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clip-rule="evenodd"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"/>
            </svg>

            <!-- Alternate :: External File link -->
            <!-- <img src="./../../assets/media/heroicons/outline/volume-off.svg" alt="" class="injectable hw-20 mr-2"> -->
            <span>Mute Notifications</span> 
        </a>
       
        <a class="dropdown-item align-items-center d-flex" href="#">
            <!-- Default :: Inline SVG -->
            <svg class="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
            </svg>
              
            <!-- Alternate :: External File link -->
            <!-- <img src="./../../assets/media/heroicons/outline/archive.svg" alt="" class="injectable hw-20 mr-2"> -->
            <span>Archive</span>
        </a>
        <a class="dropdown-item align-items-center d-flex" href="#">
            <!-- Default :: Inline SVG -->
            <svg class="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
            </svg>
              
            <!-- Alternate :: External File link -->
            <!-- <img src="./../../assets/media/heroicons/outline/trash.svg" alt="" class="injectable hw-20 mr-2"> -->
            <span>Delete</span>
        </a>
        <a class="dropdown-item align-items-center d-flex text-danger" href="#">
            <!-- Default :: Inline SVG -->
            <svg class="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
            </svg>
              
            <!-- Alternate :: External File link -->
            <!-- <img src="./../../assets/media/heroicons/outline/ban.svg" alt="" class="injectable hw-20 mr-2"> -->
            <span>Block</span>
        </a>
    </div>
</div>
</li>
<li class="nav-item list-inline-item d-sm-none mr-0">
<div class="dropdown">
    <a class="nav-link text-muted px-1" href="#" role="button" title="Details" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <!-- Default :: Inline SVG -->
        <svg class="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
        </svg>

        <!-- Alternate :: External File link -->
        <!-- <img src="./../../assets/media/heroicons/outline/dots-vertical.svg" alt="" class="injectable hw-20"> -->
    </a>

    <div class="dropdown-menu dropdown-menu-right ">
        <a class="dropdown-item align-items-center d-flex" href="#">
            <!-- Default :: Inline SVG -->
            <svg class="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>

            <!-- Alternate :: External File link -->
            <!-- <img src="./../../assets/media/heroicons/outline/phone.svg" alt="" class="injectable hw-20 mr-2"> -->
            <span>Call</span>    
        </a>
        <a class="dropdown-item align-items-center d-flex" href="#" data-toggle="collapse" data-target="#searchCollapse" aria-expanded="false">
            <!-- Default :: Inline SVG -->
            <svg class="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>

            <!-- Alternate :: External File link -->
            <!-- <img src="./../../assets/media/heroicons/outline/search.svg" alt="" class="injectable hw-20 mr-2"> -->
            <span>Search</span>    
        </a>
        
        <a class="dropdown-item align-items-center d-flex" href="#" data-chat-info-toggle="">
            <!-- Default :: Inline SVG -->
            <svg class="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
              
            <!-- Alternate :: External File link -->
            <!-- <img src="./../../assets/media/heroicons/outline/information-circle.svg" alt="" class="injectable hw-20 mr-2"> -->
            <span>View Info</span>
        </a>
        
        <a class="dropdown-item align-items-center d-flex" href="#">
            <!-- Default :: Inline SVG -->
            <svg class="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clip-rule="evenodd"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"/>
            </svg>

            <!-- Alternate :: External File link -->
            <!-- <img src="./../../assets/media/heroicons/outline/volume-off.svg" alt="" class="injectable hw-20 mr-2"> -->
            <span>Mute Notifications</span> 
        </a>
        <a class="dropdown-item align-items-center d-flex" href="#">
            <!-- Default :: Inline SVG -->
            <svg class="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>

            <!-- Alternate :: External File link -->
            <!-- <img src="./../../assets/media/heroicons/outline/photograph.svg" alt="" class="injectable hw-20 mr-2"> -->
            <span>Wallpaper</span>
        </a>
        <a class="dropdown-item align-items-center d-flex" href="#">
            <!-- Default :: Inline SVG -->
            <svg class="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
            </svg>

            <!-- Alternate :: External File link -->
            <!-- <img src="./../../assets/media/heroicons/outline/archive.svg" alt="" class="injectable hw-20 mr-2"> -->
            <span>Archive</span>
        </a>
        <a class="dropdown-item align-items-center d-flex" href="#">
            <!-- Default :: Inline SVG -->
            <svg class="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
            </svg>
              
            <!-- Alternate :: External File link -->
            <!-- <img src="./../../assets/media/heroicons/outline/trash.svg" alt="" class="injectable hw-20 mr-2"> -->
            <span>Delete</span>
        </a>
        <a class="dropdown-item align-items-center d-flex text-danger" href="#">
            <!-- Default :: Inline SVG -->
            <svg class="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
            </svg>
              
            <!-- Alternate :: External File link -->
            <!-- <img src="./../../assets/media/heroicons/outline/ban.svg" alt="" class="injectable hw-20 mr-2"> -->
            <span>Block</span>
        </a>
    </div>
</div>
</li>
</ul>
</div>
<div class="collapse border-bottom px-3" id="searchCollapse">
<div class="container-xl py-2 px-0 px-md-3">
<div class="input-group bg-light ">
<input type="text" class="form-control form-control-md border-right-0 transparent-bg pr-0" placeholder="Search">
<div class="input-group-append">
    <span class="input-group-text transparent-bg border-left-0">
        <!-- Default :: Inline SVG -->
        <svg class="hw-20 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
          
        <!-- Alternate :: External File link -->
        <!-- <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/search.svg" alt="Search icon"> -->
    </span>
</div>
</div>
</div>

</div>
<div class="chat-content p-2" id="messageBody">
<div class="container">

<!-- Message Day Start -->
<div class="message-day">

<div class="message-divider sticky-top pb-2" data-label="Yesterday">&nbsp;</div>
</div>
<!-- Message Day End -->

<!-- Message Day Start -->
</div>

<!-- Scroll to finish -->
</div>
<div class="chat-footer">
<div class="attachment">
<div class="dropdown">
<button class="btn btn-secondary btn-icon btn-minimal btn-sm" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <svg class="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
      
    <!-- <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/plus-circle.svg" alt=""> -->
</button>
<div class="dropdown-menu nav-item list-inline-item d-block d-xl-none mr-1">
    <a class="dropdown-item" href="#">
     <div class="image-upload">
        <label for="file-input">
        <svg class="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
        </svg>
        <!-- <img class="injectable hw-20 mr-2" src="./../../assets/media/heroicons/outline/photograph.svg" alt=""> -->
        <span>Gallery</span>
        </label>
        <input id="file-input" type="file" name="myImage" accept="image/png, image/gif, image/jpeg , img/jpg" />
    </div>
    </a>
    <a class="dropdown-item" href="#">
        <div class="image-upload">
            <label for="file-input2">
        <svg class="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
        </svg>
        
          
        <!-- <img class="injectable hw-20 mr-2" src="./../../assets/media/heroicons/outline/volume-up.svg" alt=""> -->
        <span>Audio</span>
    </label>
    <input id="file-input2" type="file" accept=".mp3,audio/*">
</div>
    </a>
    <a class="dropdown-item" href="#">
        <svg class="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
        </svg>
          
        <!-- <img class="injectable hw-20 mr-2" src="./../../assets/media/heroicons/outline/document.svg" alt=""> -->
        <span>Document</span>
    </a>
 
    <a class="dropdown-item" href="#">
        <svg class="hw-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
          
        <!-- <img class="injectable hw-20 mr-2" src="./../../assets/media/heroicons/outline/location-marker.svg" alt=""> -->
        <span>Location</span>
    </a>
   
</div>
</div>
</div>

<textarea class="form-control emojionearea-form-control" id="messageInput" rows="1" placeholder="Type your message here..."></textarea>
<div class="btn btn-primary btn-icon send-icon rounded-circle text-light mb-1" role="button">
<svg class="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
</svg>

<!-- <img src="./../../assets/media/heroicons/outline/arrow-right.svg" alt="" class="injectable"> -->
</div>
</div>
</div>
<div class="chat-info">
<div class="d-flex h-100 flex-column">

<!-- Chat Info Header Start -->
<div class="chat-info-header px-2">
<div class="container-fluid">
<ul class="nav justify-content-between align-items-center">
    <!-- Sidebar Title Start -->
    <li class="text-center">
        <h5 class="text-truncate mb-0">Profile Details</h5>
    </li>
    <!-- Sidebar Title End -->

    <!-- Close Sidebar Start -->
    <li class="nav-item list-inline-item">
        <a class="nav-link text-muted px-0" href="#" data-chat-info-close="">
            <!-- Default :: Inline SVG -->
            <svg class="hw-22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
              
            <!-- Alternate :: External File link -->
            <!-- <img class="injectable hw-22" src="./../../assets/media/heroicons/outline/x.svg" alt=""> -->
        
        </a>
    </li>
    <!-- Close Sidebar End -->
</ul>
</div>
</div>
<!-- Chat Info Header End  -->

<!-- Chat Info Body Start  -->
<div class="hide-scrollbar flex-fill">

<!-- User Profile Start -->
<div class="text-center p-3">

<!-- User Profile Picture -->
<div class="avatar avatar-xl mx-5 mb-3">
    <img class="avatar-img" src="../../assets/media/avatar/2.png" alt="">
</div>

<!-- User Info -->
<h5 class="mb-1">Catherine Richardson</h5>
<p class="text-muted d-flex align-items-center justify-content-center">
    <!-- Default :: Inline SVG -->
    <svg class="hw-18 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>
      
    <!-- Alternate :: External File link -->
    <!-- <img class="injectable mr-1 hw-18" src="./../../assets/media/heroicons/outline/location-marker.svg" alt=""> -->
    <span>San Fransisco, CA</span>
</p>

<!-- User Quick Options -->
<div class="d-flex align-items-center justify-content-center">
    <div class="btn btn-outline-default btn-icon rounded-circle mx-1">
        <!-- Default :: Inline SVG -->
        <svg class="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
        </svg>
          
        <!-- Alternate :: External File link -->
        <!-- <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/user-add.svg" alt=""> -->
    </div>
    <div class="btn btn-primary btn-icon rounded-circle text-light mx-1">
        <!-- Default :: Inline SVG -->
        <svg class="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
          
        <!-- Alternate :: External File link -->
        <!-- <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/heart.svg" alt=""> -->
    </div>
    <div class="btn btn-danger btn-icon rounded-circle text-light mx-1">
        <!-- Default :: Inline SVG -->
        <svg class="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
        </svg>
          
        <!-- Alternate :: External File link -->
        <!-- <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/ban.svg" alt=""> -->
    </div>
</div>
</div>
<!-- User Profile End -->

<!-- User Information Start -->
<div class="chat-info-group">
<a class="chat-info-group-header" data-toggle="collapse" href="#profile-info" role="button" aria-expanded="true" aria-controls="profile-info">
    <h6 class="mb-0">User Information</h6>
    
    <!-- Default :: Inline SVG -->
     <svg class="hw-20 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
      
    <!-- Alternate :: External File link -->
    <!-- <img class="injectable text-muted hw-20" src="./../../assets/media/heroicons/outline/information-circle.svg" alt=""> -->
  </a>

<div class="chat-info-group-body collapse show" id="profile-info">
    <div class="chat-info-group-content list-item-has-padding">
        <!-- List Group Start -->
        <ul class="list-group list-group-flush ">

            <!-- List Group Item Start -->
            <li class="list-group-item border-0">
                <p class="small text-muted mb-0">Phone</p>
                <p class="mb-0">+01-222-364522</p>
            </li>
            <!-- List Group Item End -->

            <!-- List Group Item Start -->
            <li class="list-group-item border-0">
                <p class="small text-muted mb-0">Email</p>
                <p class="mb-0">catherine.richardson@gmail.com</p>
            </li>
            <!-- List Group Item End -->

            <!-- List Group Item Start -->
            <li class="list-group-item border-0">
                <p class="small text-muted mb-0">Address</p>
                <p class="mb-0">1134 Ridder Park Road, San Fransisco, CA 94851</p>
            </li>
            <!-- List Group Item End -->
        </ul>
        <!-- List Group End -->
    </div>
</div>
</div>
<!-- User Information End -->

<!-- Shared Media Start -->
<div class="chat-info-group">
<a class="chat-info-group-header" data-toggle="collapse" href="#shared-media" role="button" aria-expanded="true" aria-controls="shared-media">
    <h6 class="mb-0">Last Media</h6>
   
    <!-- Default :: Inline SVG -->
    <svg class="hw-20 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
    </svg>

    <!-- Alternate :: External File link -->
    <!-- <img class="injectable text-muted hw-20" src="./../../assets/media/heroicons/outline/photograph.svg" alt=""> -->
  </a>

<div class="chat-info-group-body collapse show" id="shared-media">
    <div class="chat-info-group-content">
        <!-- Shared Media -->
        <div class="form-row">
            <div class="col-4 col-md-2 col-xl-4">
                <a href="#">
                    <img src="../../assets/media/shared-photos/01.jpg" class="img-fluid rounded border" alt="">
                </a>
            </div>
            <div class="col-4 col-md-2 col-xl-4">
                <a href="#">
                    <img src="../../assets/media/shared-photos/02.jpg" class="img-fluid rounded border" alt="">
                </a>
            </div>
            <div class="col-4 col-md-2 col-xl-4">
                <a href="#">
                    <img src="../../assets/media/shared-photos/03.jpg" class="img-fluid rounded border" alt="">
                </a>
            </div>
        </div>
    </div>
</div>
</div>
<!-- Shared Media End -->

<!-- Shared Files Start -->
<div class="chat-info-group">
<a class="chat-info-group-header" data-toggle="collapse" href="#shared-files" role="button" aria-expanded="true" aria-controls="shared-files">
    <h6 class="mb-0">Documents</h6>
  
    <!-- Default :: Inline SVG -->
    <svg class="hw-20 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
    </svg>
  
    <!-- Alternate :: External File link -->
    <!-- <img class="injectable text-muted hw-20" src="./../../assets/media/heroicons/outline/document.svg" alt=""> -->
</a>

<div class="chat-info-group-body collapse show" id="shared-files">
    <div class="chat-info-group-content list-item-has-padding">
         <!-- List Group Start -->
         <ul class="list-group list-group-flush">

            <!-- List Group Item Start -->
            <li class="list-group-item">
                <div class="document">
                    <div class="btn btn-primary btn-icon rounded-circle text-light mr-2">
                        <!-- Default :: Inline SVG -->
                        <svg class="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                        </svg>
                          
                        <!-- Alternate :: External File link -->
                        <!-- <img class="injectable hw-24" src="./../../assets/media/heroicons/outline/document.svg" alt=""> -->
                    </div>

                    <div class="document-body">
                        <h6 class="text-truncate">
                            <a href="#" class="text-reset" title="effects-of-global-warming.docs">Effects-of-global-warming.docs</a>
                        </h6>

                        <ul class="list-inline small mb-0">
                            <li class="list-inline-item">
                                <span class="text-muted">79.2 KB</span>
                            </li>
                            <li class="list-inline-item">
                                <span class="text-muted text-uppercase">docs</span>
                            </li>
                        </ul>
                    </div>

                    <div class="document-options ml-1">
                        <div class="dropdown">
                            <button class="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <!-- Default :: Inline SVG -->
                                <svg class="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                                </svg>
                                
                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/dots-vertical.svg" alt=""> -->
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Download</a>
                                <a class="dropdown-item" href="#">Share</a>
                                <a class="dropdown-item" href="#">Delete</a>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <!-- List Group Item End -->

            <!-- List Group Item Start -->
            <li class="list-group-item">
                <div class="document">
                    <div class="btn btn-primary btn-icon rounded-circle text-light mr-2">
                        <!-- Default :: Inline SVG -->
                        <svg class="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                        </svg>

                        <!-- Alternate :: External File link -->
                        <!-- <img class="injectable hw-24" src="./../../assets/media/icons/excel-file.svg" alt=""> -->
                    </div>

                    <div class="document-body">
                        <h6 class="text-truncate">
                            <a href="#" class="text-reset" title="global-warming-data-2020.xlxs">Global-warming-data-2020.xlxs</a>
                        </h6>

                        <ul class="list-inline small mb-0">
                            <li class="list-inline-item">
                                <span class="text-muted">79.2 KB</span>
                            </li>
                            <li class="list-inline-item">
                                <span class="text-muted text-uppercase">xlxs</span>
                            </li>
                        </ul>
                    </div>

                    <div class="document-options ml-1">
                        <div class="dropdown">
                            <button class="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <!-- Default :: Inline SVG -->
                                <svg class="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                                </svg>
                                
                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/dots-vertical.svg" alt=""> -->
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">View</a>
                                <a class="dropdown-item" href="#">Share</a>
                                <a class="dropdown-item" href="#">Delete</a>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <!-- List Group Item End -->

            <!-- List Group Item Start -->
            <li class="list-group-item">
                <div class="document">
                    <div class="btn btn-primary btn-icon rounded-circle text-light mr-2">
                        <!-- Default :: Inline SVG -->
                        <svg class="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                        </svg>

                        <!-- Alternate :: External File link -->
                        <!-- <img class="injectable hw-24" src="./../../assets/media/icons/powerpoint-file.svg" alt=""> -->
                    </div>

                    <div class="document-body">
                        <h6 class="text-truncate">
                            <a href="#" class="text-reset" title="great-presentation-on global-warming-2020.ppt">Great-presentation-on global-warming-2020.ppt</a>
                        </h6>

                        <ul class="list-inline small mb-0">
                            <li class="list-inline-item">
                                <span class="text-muted">79.2 KB</span>
                            </li>
                            <li class="list-inline-item">
                                <span class="text-muted text-uppercase">ppt</span>
                            </li>
                        </ul>
                    </div>

                    <div class="document-options ml-1">
                        <div class="dropdown">
                            <button class="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <!-- Default :: Inline SVG -->
                                <svg class="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                                </svg>
                                
                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/dots-vertical.svg" alt=""> -->
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Download</a>
                                <a class="dropdown-item" href="#">Share</a>
                                <a class="dropdown-item" href="#">Delete</a>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <!-- List Group Item End -->
        </ul>
        <!-- List Group End -->
    </div>
</div>
</div>
<!-- Shared Files End -->

</div>
<!-- Chat Info Body Start  -->

</div>
</div>
<!-- Chat Info End -->
<!-- Chats Page End -->

<!-- Call Log Page Start -->

<!-- Call Log Page End -->

<!-- Friends Page Start -->

<!-- Friends Page End -->

<!-- Profile Settings Start -->

<!-- Profile Settings End -->

      ` )
    });

    $('#addbut5').click(function (){
        var ssl =prompt("HI");
        $( ".chat-content" ).append( `<div class="message-day">
        <!-- Self Message Start -->
       <div class="message self">
           <div class="message-wrapper">
               <div class="message-content"><span> ${ssl}</span></div>
           </div>
           <div class="message-options">
               <div class="avatar avatar-sm"><img alt="" src="../../assets/media/avatar/6.png"></div>

               <span class="message-date">${time}</span>

               <div class="dropdown">
                   <a class="text-muted" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       <!-- Default :: Inline SVG -->
                       <svg class="hw-18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                       </svg>
                       <!-- <img class="injectable hw-18" src="./../../assets/media/heroicons/outline/dots-horizontal.svg" alt="message options"> -->
                   </a>

                   <div class="dropdown-menu">
                       <a class="dropdown-item d-flex align-items-center" href="#">
                           <!-- Default :: Inline SVG -->
                           <svg class="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                           </svg>
                             
                           <!-- Alternate :: External File link -->
                           <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/duplicate.svg" alt="message options"> -->
                           <span>Copy</span>
                       </a>
                       <a class="dropdown-item d-flex align-items-center" href="#">
                           <!-- Default :: Inline SVG -->
                           <svg class="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                           </svg>

                           <!-- Alternate :: External File link -->
                           <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/pencil.svg" alt="message edit"> -->
                           <span>Edit</span>
                       </a>
                       <a class="dropdown-item d-flex align-items-center" href="#">
                           <!-- Default :: Inline SVG -->
                           <svg class="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path>
                           </svg>

                           <!-- Alternate :: External File link -->
                           <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message replay"> -->
                           <span>Replay</span>
                       </a>
                       <a class="dropdown-item d-flex align-items-center" href="#">
                           <!-- Default :: Inline SVG -->
                           <svg class="hw-18 rotate-y mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path>
                           </svg>

                           <!-- Alternate :: External File link -->
                           <!-- <img class="injectable rotate-y hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message forward"> -->
                           <span>Forward</span>
                       </a>
                       <a class="dropdown-item d-flex align-items-center" href="#">
                           <!-- Default :: Inline SVG -->
                           <svg class="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                           </svg>
                             
                           <!-- Alternate :: External File link -->
                           <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/star.svg" alt="message favourite"> -->
                           <span>Favourite</span>
                       </a>
                       <a class="dropdown-item d-flex align-items-center text-danger" href="#">
                           <!-- Default :: Inline SVG -->
                           <svg class="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                           </svg>
                             
                           <!-- Alternate :: External File link -->
                           <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/trash.svg" alt="message delete"> -->
                           <span>Delete</span>
                       </a>
                   </div>
               </div>
           </div>
       </div>
       <!-- Self Message End -->
       <!-- Received Message Start -->
       
       <!-- Received Message End -->

       <!-- Received Message Start -->

       <!-- Received Message End -->

       <!-- Self Message Start -->
     
       <!-- Self Message End -->
       
       <!-- Received Message Start -->
       
       <!-- Received Message End -->
       
       <!-- Self Message Start -->
      
      
       <!-- Self Message End -->
   </div>` );
   $('.chat-body #messageBody').scrollTop($('.chat-body #messageBody')[0].scrollHeight);
    });

    $('#addbut6').click(function (){
        var ssl =prompt("HI");
        $( ".chat-content" ).append( `<div class="message">
        <div class="message-wrapper">
            <div class="message-content">
                <span>${ssl}</span>
            </div>
        </div>
        <div class="message-options">
            <div class="avatar avatar-sm"><img alt="" src="../../assets/media/avatar/6.png"></div>
            <span class="message-date">${time}</span>
            <div class="dropdown">
                <a class="text-muted" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <svg class="hw-18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                    </svg>
                </a>

                <div class="dropdown-menu">
                    <a class="dropdown-item d-flex align-items-center" href="#">
                        <svg class="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                        </svg>
                        <span>Copy</span>
                    </a>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                        <svg class="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path>
                        </svg>
                        <span>Replay</span>
                    </a>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                        <svg class="hw-18 rotate-y mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path>
                        </svg>
                        <span>Forward</span>
                    </a>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                        <svg class="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                        </svg>
                        <span>Favourite</span>
                    </a>
                    <a class="dropdown-item d-flex align-items-center text-danger" href="#">
                        <svg class="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                        <span>Delete</span>
                    </a>
                </div>
            </div>
        </div>
    </div>` );
    $('.chat-body #messageBody').scrollTop($('.chat-body #messageBody')[0].scrollHeight);
    });

    $('#addbut7').click(function(){
        toastr.options.progressBar = true;
        toastr.options.closeButton = true;
        // toaster('Your message here', 'Your Title', 'danger');
        toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!', {timeOut: 6000})
    });

    $('#addbut8').click(function(){
        toastr.options.progressBar = true;
        toastr.options.closeButton = true;
        // toaster('Your message here', 'Your Title', 'danger');
        toastr.success('Have fun storming the castle!', 'Miracle Max Says', {timeOut: 2000})
    });

    $('#addbut9').click(function(){
        toastr.options.progressBar = true;
        toastr.options.closeButton = true;
        // toaster('Your message here', 'Your Title', 'danger');
        toastr.error('I do not think that word means what you think it means.', 'Inconceivable!', {timeOut: 1000})
    });

    $('#addbut10').click(function(){
        toastr.options.progressBar = true;
        toastr.options.closeButton = true;
        // toaster('Your message here', 'Your Title', 'danger');
        toastr.info('Are you the 6 fingered man?',{timeOut: 10000})
    });

    
