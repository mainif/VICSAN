import pathlib
subs=[('#2E6175','#2A6F9B'),('#0C6291','#1F6D9F'),('#1D6283','#1F6D9F')]
for p in pathlib.Path('src/app/components').rglob('*.tsx'):
    t=p.read_text('utf-8')
    n=t
    for old,newc in subs:
        n=n.replace(old,newc)
    if n!=t:
        p.write_text(n,'utf-8')
        print('updated', p)
