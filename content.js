$(function () {
	links = [];
	$('[rel]').each(function (i, e) {
		var rel = $(e).attr('rel').toLowerCase();
		if (['previous', 'next', 'first', 'last', 'up', 'search', 'author', 'help', 'prev', 'top', 'index', 'begin', 'start', 'end', 'license'].indexOf(rel) != -1 || (['bookmark', 'canonical', 'shortlink'].indexOf(rel) != -1 && e.tagName == 'LINK')) {
			if ($(e).attr('type').indexOf('application') === -1) {
				links.push({
					rel: rel,
					href: $(e).attr('href'),
					title: $(e).attr('title')
				});
			}
		}
	});
	if (links.length > 0) {
		chrome.extension.sendRequest({type: 'save', data: links}, function(response) {});
	}
});
