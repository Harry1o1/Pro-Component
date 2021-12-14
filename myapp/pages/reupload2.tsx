import React, { useState } from 'react';
//MaterialUI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
// import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function Create() {
	//https://gist.github.com/hagemann/382adfc57adbd5af078dc93feef01fe1

	const initialFormData = Object.freeze({
		title: '',
		slug: '',
		excerpt: '',
		content: '',
	});

	const [postData, updateFormData] = useState(initialFormData);
	const [postimage, setPostImage] = useState(null);

	const handleChange1 = (e:any) => {
        updateFormData({
				...postData,
				[e.target.name]: e.target.value.trim(),
				['slug']: slugify(e.target.value.trim()),
			});
	};
	const handleChange2 = (e:any) => {
        setPostImage({
				image: e.target.files,
			});
			console.log(e.target.files);
		}
	};

	const handleSubmit = (e:any) => {
		e.preventDefault();
		let formData = new FormData();
		formData.append('title', postData.title);
		formData.append('slug', postData.slug);
		formData.append('author', 1);
		formData.append('excerpt', postData.excerpt);
		formData.append('content', postData.content);
		formData.append('image', postimage.image[0]);
// 		axiosInstance.post(`admin/create/`, formData);
        const res = await fetch(
                    "https://pro-component-django1o1.herokuapp.com/video/c", {
                    method: "POST",
                    headers: {
                        // update with your user-agent
                        // "Access-Control-Allow-Headers",
                        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
                        Accept: "application/json; charset=UTF-8",
                        'Content-Type': 'multipart/form-data'
                    },
                    body: formData
                }
            );
            data = await res.json();
            if (res.status === 404) {
                console.log('noooooo');
            }            
            if (res.status === 500 || !data) {
                console.log('noooooo');
            }
            else {
                console.log('oppp');
            }
            if (typeof window !== "undefined") {
                window.alert('Registration successful');
                window.location.reload();
            }
            return {
                props: {
                    data,
                    error,
                },
            }
	};


	const classes = useStyles();

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}></Avatar>
				<Typography component="h1" variant="h5">
					Create New Post
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="title"
								label="Post Title"
								name="title"
								autoComplete="title"
								onChange={handleChange1}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="excerpt"
								label="Post Excerpt"
								name="excerpt"
								autoComplete="excerpt"
								onChange={handleChange1}
								multiline
								rows={4}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="slug"
								label="slug"
								name="slug"
								autoComplete="slug"
								value={postData.slug}
								onChange={handleChange1}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="content"
								label="content"
								name="content"
								autoComplete="content"
								onChange={handleChange1}
								multiline
								rows={4}
							/>
						</Grid>
						<input
							accept="image/*"
							className={classes.input}
							id="post-image"
							onChange={handleChange1}
							name="image"
							type="file"
						/>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Create Post
					</Button>
				</form>
			</div>
		</Container>
	);
}