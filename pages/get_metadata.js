	<!-- Bootstrap core JavaScript
	================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->
	<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
	<script>
		String.prototype.tpl = function(o) { 
			var r = this ; 
			for (var i in o) { 
				r = r.replace(new RegExp("\\$"+i, 'g'),o[i])  
			} 
			return r 
		}
		
		var listItemTpl = `<li><a href='#' onclick='load("$url")'>$label</a></li>`
		
		$(document).ready(main);

		function main() {
			$.ajax({
				method: 'GET',
				url: 'filelist.json',
				success: function(d) {
					for (var i=0; i<d.length; i++) {
						$('#list').append(listItemTpl.tpl({url:d[i].url, label: d[i].label}))
					}	
				},
				error: function() {
					alert('No document to show')
				}
			});
			
			
			$('#showasides').click(function() {
				if (this.checked) 
					$('.aside').addClass('text-aside')
				else
					$('.aside').removeClass('text-aside')
			})
			$('#showspeeches').click(function() {
				if (this.checked) 
					$('q.speech').addClass('text-speeches')
				else
					$('q.speech').removeClass('text-speeches')
			})
			$('#showquotes').change(function() {
				if (this.checked) 
					$('q:not(.speech)').addClass('text-quotes')
				else
					$('q:not(speech)').removeClass('text-quotes')
			})
		}
		
		function load(file) {
			$.ajax({
				method: 'GET',
				url: file,
				success: function(d) {
					$('#file').html(d)
					$('#title').html($('#file h1'))
					$('.show').prop("checked", false)
					addIds()
					filltabs()
				},
				error: function() {
					alert('Could not load file '+file)
				}
			});
		}
		
		function addIds() {
			addId('.aside','aside')
			addId('q.speech', 'speech')
			addId('q:not(.speech)', 'quote')
		}
		
		function addId(what, prefix) {
			var id = '0'
			var elements = $(what); 
			for (var i=0; i<elements.length; i++) {
				elements[i].id = prefix + "-" + id++
			}
		}
		function filltabs(){
			filltab("#file .aside","list-aside","#asides")
			filltab("#file q.speech","list-speech","#speeches")
			filltab("#file q:not(.speech)","list-quote","#quotes")
		}
		
		function filltab(what,style,where) {
			var list = `<li class="list $style"><a href="#" onclick="goto('$place')">$content</a></li>`
			var elements = $(what); 
			$(where+' ul').empty(); 
			for (var i=0; i<elements.length; i++) {
				$(where+' ul').append(list.tpl({
					style:style, 
					place: '#'+elements[i].id,
					content: elements[i].innerHTML
				}) )
			}
		}
		
		function goto(id) {
			var t = $(id)[0].offsetTop;
			$('body').animate({ scrollTop: t }, 200);
			$(id).addClass('animate');
			setTimeout(function(){
				$(id).removeClass('animate');
			},5000);
		}
		
	</script>